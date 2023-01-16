const NavDesp0 = () => {
    const propsColumn = [
        {
            href: "",
            textA: ""
        }
    ]
    return (
        <div>
                          <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            { propsColumn.map((column)=>{
                                <li className="text-base truncate"><a href= { column.href }> { column.textA } </a></li>
                            })}
                          </ul>
        </div>
    )
}
export default NavDesp0;