export function Sidebar(){
    // Array of sidebar names
    const sidebars = [ 'Dashboard', 'Widget', 'Reviews', 'Customers', 'Online Analysis', 'Settings']
    // Mapping over sibebar array with the name value to create a react p element (jsx) for each naem within the Sidebar div
    const sidebarJSX = sidebars.map( name => {
        return <p>{name}</p>
        })
    return <div className='Sidebar'>{sidebarJSX}</div>
}