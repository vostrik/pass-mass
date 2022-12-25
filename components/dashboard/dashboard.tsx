import { useRef, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useTranslation } from 'next-i18next'

import { tokens } from '../../design-system'
import { TDataSet } from '../../types/dataset'

import { gradientText } from './dashboard.css'
import { initChartJS } from './init-chartjs'

initChartJS()

const options = {
  responsive: true,
  scales: {
    x: {
      display: false
    },
    y: {
      display: false,
      grace: '5%'
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

interface IDashboardProps {
  dataset: TDataSet
  metricName: string
  metricUnit: string
}

const getEffectiveCssProperty = (cssVarFunc: string) => {
  const matched = cssVarFunc.match(/var\((.*)\)/)
  if (matched === null) return ''
  return matched[1]
}

export const Dashboard = ({ dataset, metricName, metricUnit }: IDashboardProps) => {
  const divEl = useRef<HTMLDivElement | null>(null)

  const [primaryColor, setPrimaryColor] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')

  const { t } = useTranslation()

  useEffect(() => {
    if (divEl.current === null) return

    const style = getComputedStyle(divEl.current)
    setPrimaryColor(style.getPropertyValue(getEffectiveCssProperty(tokens.color.primary)))
    setBackgroundColor(style.getPropertyValue(getEffectiveCssProperty(tokens.color.background)))
  }, [])

  const data = {
    labels: dataset.map(x => x.date),
    datasets: [
      {
        fill: true,
        data: dataset.map(x => x.value),
        borderColor: primaryColor,
        backgroundColor,
        borderWidth: 2
      }
    ]
  }

  return (
    <div ref={divEl}>
      {dataset.length > 0 && (
        <h1>
          {t('Your')}&nbsp;
          <span className={gradientText}>{metricName}</span>
          &nbsp;{t('is')}&nbsp;
          <input name="value" defaultValue={dataset.at(-1)?.value} />
          &nbsp;{metricUnit}
        </h1>
      )}
      <Line options={options} data={data} />
    </div>
  )
}
