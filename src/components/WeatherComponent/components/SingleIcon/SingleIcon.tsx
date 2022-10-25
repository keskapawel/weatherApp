interface IProps {
  iconName?: string;
  alt?: string;
  height?: any;
}

export const SingleIcon = ({ iconName, alt = 'Icon', height }: IProps) => {
  return iconName ? (
    <img
      src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/${iconName}.png`}
      alt={alt}
      height={height}
    />
  ) : (
    <></>
  );
};
