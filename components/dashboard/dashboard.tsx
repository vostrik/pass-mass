import { useRef, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

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
  dataset: TDataSet,
  metricName: string,
  metricUnit: string
}

export const Dashboard = ({ dataset, metricName, metricUnit }: IDashboardProps) => {
  const divEl = useRef<HTMLDivElement | null>(null)
  
  const [primaryColor, setPrimaryColor] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')

  useEffect(() => {
    if (divEl.current) {
      const style = getComputedStyle(divEl.current)
        const [,primaryColor] = tokens.color.primary.match(/var\((.*)\)/) || []
        const [,backgroundColor] = tokens.color.background.match(/var\((.*)\)/) || []
        setPrimaryColor(style.getPropertyValue(primaryColor))
        setBackgroundColor(style.getPropertyValue(backgroundColor))
    }
  }, []);

  const data = {
    labels: dataset.map(x => x.date),
    datasets: [
      {
        fill: true,
        data: dataset.map(x => x.value),
        borderColor: primaryColor,
        backgroundColor: backgroundColor,
        borderWidth: 2
      }
    ]
  }

  return (
    <div ref={divEl}>
      {dataset.length && (
        <h1>
          Your&nbsp;
          <span className={gradientText}>{metricName}</span>
          &nbsp;is&nbsp;
          <input name="value" value={dataset.at(-1)?.value} />
          &nbsp;{metricUnit}
        </h1>
      )}
      <Line options={options} data={data} />
    </div>
  )
}