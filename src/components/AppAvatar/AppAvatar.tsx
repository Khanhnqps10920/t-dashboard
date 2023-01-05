import './AppAvatar.scss';

interface AvatarProps {
  email?: string;
  size?: 'large' | 'small';
}

const AppAvatar = ({ email = '', size = 'small' }: AvatarProps) => {
  return (
    <div className={`e-avatar-${size}`}>{email.slice(0, 2).toUpperCase()}</div>
  );
};
export default AppAvatar;
