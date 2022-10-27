import { Link } from 'react-router-dom';
import pod from '../assets/pod.jpg';
import training from '../assets/training.jpg';

import './TrainingSection.css';

export const TrainingSection = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores atque totam, reiciendis vel eius. Laudantium fuga officiis fugit quia non explicabo rerum. Accusamus, voluptatum. Error ab laboriosam aspernatur numquam.</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={pod} alt='Pod' className='img' />
          </div>

          <div className='image-stack bottom'>
            <img src={training} alt='Training' className='img' />
          </div>
        </div>
      </div>
    </div>
  );
};