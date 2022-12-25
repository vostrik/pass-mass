import { useTranslation } from 'react-i18next'

import { tableWrapper } from './table.css'

import { TDataSet } from '../../types/dataset'
import { TCategory } from '../../types/category'

interface ITableProps {
  dataset: TDataSet
  category: TCategory
}

export const Table = ({ dataset = [], category }: ITableProps) => {
  const { t } = useTranslation()

  return (
    <div className={tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>{t('Date')}</th>
            <th>{category.name}, {category.units}</th>
          </tr>
        </thead>
        <tbody>
          {dataset.map(record => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
