

const SortList = ({handleSort,sortOrder}) => {
    return (
        <div className="flex items-center gap-2 bg-slate-200 rounded-xl">
            <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="p-2 rounded-md cursor-pointer"
            >
                <option value="">Sort by Name</option>
                <option value="asc">Ascending (A-Z)</option>
                <option value="desc">Descending (Z-A)</option>
            </select>
        </div>
    )
}

export default SortList