
import profile from '../../assets/images/profile.png';

export default function Navigation() {
  return (
    <div className='flex justify-between items-center m-10'>
      <h1 className='text-5xl font-semibold'>Knowledge Cafe</h1>
      <img src={profile} alt="Profile" />
    </div>
  );
}
