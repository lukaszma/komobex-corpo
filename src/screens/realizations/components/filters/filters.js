import React, { useState } from "react"
import classnames from "classnames"
import { includes, filter } from "lodash"
import { filters } from "@enums/filter"
import { categories } from "@enums/categories"
import { FilterItem, FiltersList } from "./styles"

const Filters = () => {
  const [activeFilters, setActiveFilters] = useState([categories.ALL])

  const onFilter = id => {
    if (includes(activeFilters, id)) {
      setActiveFilters(
        filter(activeFilters, activeFilter => activeFilter !== id)
      )
    } else {
      setActiveFilters([...activeFilters, id])
    }
  }
  return (
    <FiltersList>
      {filters.map(filter => (
        <FilterItem
          onClick={() => onFilter(filter.id)}
          key={filter.id}
          className={classnames({ active: includes(activeFilters, filter.id) })}
        >
          <span>{filter.title}</span>
        </FilterItem>
      ))}
    </FiltersList>
  )
}

export default Filters
