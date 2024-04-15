export const Chevron = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => (
  <svg
    className={className}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="6"
    viewBox="0 0 6 4"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.47 1L1 1.38057L3 3L5 1.38057L4.53 1L3 2.23617L1.47 1Z"
      stroke="black"
      strokeWidth="0.3"
    />
  </svg>
);
