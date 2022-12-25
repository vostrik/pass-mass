import { tableWrapper } from './table.css'

import { TDataSet } from '../../types/dataset'
import { TCategory } from '../../types/category'

interface ITableProps {
  dataset: TDataSet,
  category: TCategory
}

export const Table = ({ dataset = [], category }: ITableProps) => {
  return (
    <div className={tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
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