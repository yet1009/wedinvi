import styles from './FullScreenMessage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface FullScreenMessageProps {
  type: 'loading' | 'error';
}

const FullScreenMessage = ({ type }: FullScreenMessageProps) => {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          <p>에러가 발생했어요.. 잠시 후 다시 시도해주세요.</p>
        </>
      )}
    </div>
  );
};

export function Heart() {
  return (
    <svg
      className={cx('icon-heart')}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path
            d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z"
            style={{ fill: '#ff7979' }}
          />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  );
}

function Error() {
  return (
    <svg
      className={cx('icon-error')}
      id="icon"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="8" r="1" />
      <circle cx="11" cy="16" r="1" />
      <circle cx="11" cy="24" r="1" />
      <path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H18V27H8V21H26V5A2,2,0,0,0,24,3Zm0,16H8V13H24Zm0-8H8V5H24Z" />
      <polygon points="29 24.415 27.586 23 25 25.587 22.414 23 21 24.415 23.586 27 21 29.586 22.414 31 25 28.414 27.586 31 29 29.586 26.414 27 29 24.415" />
      <rect
        data-name="&lt;Transparent Rectangle&gt;"
        height="32"
        id="_Transparent_Rectangle_"
        width="32"
      />
    </svg>
  );
}

export default FullScreenMessage;
