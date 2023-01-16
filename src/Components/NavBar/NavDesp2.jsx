const NavDesp = () => {
    const props = [
        {
            text1:"Pricing",
            url: ""
        },
        {
            text1:"Docs",
            url: ""
        },
        {
            text1:"Enterprise",
            url: ""
        },
        {
            text1:"Blog",
            url: ""
        },
        {
            text1:"Help Center",
            url: ""
        },
        {
            text1:"Security",
            url: ""
        },
        {
            text1:"Events",
            url: ""
        }
    ]
    return (
        <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {props.map((prop)=> {
                    return (
                        <a
                            href={prop.url}
                        >{prop.text1}</a>
                    )
                })}
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
    )
}
export default NavDesp;