const AnnounceCard = () => {

    const announceData = [{id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Carl'},]

    return (
        <div>
            {announceData.map((data) => {
                return (
                    <div key={data.id} className={`flex justify-between bg-[${data.id%2 ? '#FFFFFF' : '#F5F5F5'}] py-[0.6rem] px-5 text-[#595959]`}>
                        <div>{data.name}</div>
                        <div>16/01/2024</div>
                    </div>
                )
            })}
        </div>
    )
}

export default AnnounceCard