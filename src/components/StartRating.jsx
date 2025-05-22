import { assets } from '../assets/assets';
const StartRating = ({rating}) => {
    return (
        <>
            {Array(5).fill('').map((_, index) => (
                <img key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="start-Icon" className='w-4.5 h-4.5' />
            ))}
            
        </>
    );
};

export default StartRating;