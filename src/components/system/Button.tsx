import Link from 'next/link';
import s from './Button.module.css';

type ButtonVariant = 'primary' | 'mustard' | 'terra' | 'outline' | 'ghost';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  onDark?: boolean;
  children: React.ReactNode;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  style?: React.CSSProperties;
}

function splitArrow(children: React.ReactNode): [React.ReactNode, boolean] {
  if (typeof children === 'string' && children.endsWith(' →')) {
    return [children.slice(0, -2), true];
  }
  return [children, false];
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  onDark = false,
  children,
  external = false,
  type = 'button',
  disabled = false,
  style,
}: ButtonProps) {
  const cls = `${s.btn} ${onDark && variant === 'outline' ? s.outlineDark : s[variant]}`;
  const [text, hasArrow] = splitArrow(children);

  const inner = (
    <>
      {text}
      {hasArrow && <span className={s.arrow} aria-hidden>→</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} style={style}>
      {inner}
    </button>
  );
}
