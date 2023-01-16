const NavDesp = () => {
    const propsColumn = [
        {
            href: "",
            className: "",
            d: "",
            textSpan: ""
        }
    ]
    return (
        <nav className="grid gap-y-8">
            { propsColumn.map((column) => {
                return(
                    <>
                        <a
                      href={column.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/chart-bar */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={column.d}
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {column.textSpan}
                      </span>
                    </a>
                    </>
                )
            })}
        </nav>          
    )
}
export default NavDesp