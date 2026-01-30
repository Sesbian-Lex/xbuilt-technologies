import './ProcessSection.css'

function ProcessCard({ title='Title' , text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi corporis sint eius delectus amet repellat ipsum explicabo molestias, ex saepe eaque nihil ea dolorum pariatur culpa illo minus est.', number='01'}){

    return(
        <div className='process-card'>   
            <h3 className='card-number'><><div> {number} </div></></h3>
            <hr/>
            <h2>{title}</h2>
            <h3 className='process-card-text'>{text}</h3>
        </div>
    )
}

export default ProcessCard