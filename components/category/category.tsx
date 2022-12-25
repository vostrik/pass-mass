import { MouseEventHandler } from "react"

import { TCategory } from '../../types/category'

interface ICategorieProps {
  categories: TCategory[],
  addCategory: MouseEventHandler
}

export const Category = ({ categories = [], addCategory}: ICategorieProps) => {
  const foo = ''
  return (
    <nav>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href="#">{category.name}</a>&nbsp;
            <a href="#">x</a>
          </li>
        ))}
        <li>
          <a href="#" onClick={addCategory}>+</a>
        </li>
      </ul>
    </nav>
  )
}