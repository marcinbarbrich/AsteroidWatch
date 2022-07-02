import { css } from "@emotion/react";

const iconStyle = ({ color, fontSize, hoverColor }) => css`
  ${color && `color: ${color}`};
  ${fontSize && `font-size: ${fontSize}px`};
  ${hoverColor && `&:hover {color: ${hoverColor}}`}
`;

const LinkIcon = (props, alt, url) => {
  return (
    <a href="#e">
      <img alt={alt} src={url} css={iconStyle(props)}></img>
    </a>
  );
};

export default LinkIcon;
