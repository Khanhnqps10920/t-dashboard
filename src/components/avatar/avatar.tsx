// demo:<Avatar email="admin@gmail.com" size='large'/>
import './avatar.scss';

interface AvatarProps {
  email?: string;
  size?: 'large' | 'small';
}

const Avatar = ({ email = '', size = 'small' }: AvatarProps) => {
  return (
    <div className={`e-avatar-${size}`}>{email.slice(0, 2).toUpperCase()}</div>
  );
};
export default Avatar;
