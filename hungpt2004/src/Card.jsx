import avaPic from './assets/ava.jpg'


function Card(){

    return (
        <div className="card">
            <img
            src= {avaPic}
            alt="profile picture"></img>
            <h2 className='card-title'>Pham Trong Hung</h2>
            <p className='card-description'>Flutter & Swift-C Developer</p>
            <h4 className='card-cer'>Certificate Language: </h4>
            <div className="sub-card">
                <ul>
                    <li>IELTS 5.5</li>
                    <li>JLPT N3</li>
                    <li>VNE 9.0</li>
                </ul>
            </div>
        </div>
    );
}

export default Card