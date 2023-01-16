const NavDespButton = (()=>{
    const propsColumn = [
        {
            a : {
                href: "",
            }
        },
        {
            path: {
                d: ""
            }
        },
        {
            p1 : ""
        },
        {
            p2 : ""
        }
    ]
    return (
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        { propsColumn.map(({a, path, p1, p2 })=>{
                            return (
                                <>
                                    <a href={ a.href } className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
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
                                                d={ path.d }
                                            />                  
                                        </svg>
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">{ p1 }</p>
                                            <p className="mt-1 text-sm text-gray-500">{ p2 }</p>
                                        </div>
                                    </a>
                                </>
                            )
                        })}
                      </div>
    )
})
export default NavDespButton;