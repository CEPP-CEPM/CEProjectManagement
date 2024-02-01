const AnnounceCard = (props) => {

    const announceData = [{id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Carl'},
    {id: 4, name: 'Bob'},
    {id: 5, name: 'Bob'},
    {id: 6, name: 'Bob'},
    {id: 7, name: 'Bob'},
    {id: 8, name: 'Bob'},
    {id: 9, name: 'Bob'},
    {id: 10, name: 'Alice'},
    {id: 11, name: 'Bob'},
    {id: 12, name: 'Carl'},
    {id: 13, name: 'Carl'},]

    const display = announceData.slice(10*(props.page-1), 10*props.page)

    props.setDatacount(announceData.length)

    return (
        <div>
            {display.map((data) => {
                return (
                    <div key={data.id} className={`flex justify-between bg-[${data.id%2 ? '#FFFFFF' : '#F5F5F5'}] py-[0.6rem] px-5 text-[#595959]`}>
                        <div>{data.name}</div>
                        <div className="hidden md:block">16/01/2024</div>
                    </div>
                )
            })}
        </div>
    )
}

export default AnnounceCard