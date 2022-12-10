import styled from 'styled-components'

const COLORS = {
  primary: {
    "--main": "darkorange",
    "--accent": "white",
  },
  secondary: {
    "--main": "lavenderblush",
    "--accent": "darkorange",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 0.8rem;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 7px 8px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: #14163c;
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: #14163c;
  border: 2px solid #14163c;

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button
