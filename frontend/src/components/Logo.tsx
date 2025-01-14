import { useTheme } from "./theme-provider";

function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#f8fafc" : "#020817";
  return (
    <div className={className}>
      <svg
        id="Layer_4"
        data-name="Layer 4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 667.59 667.59"
      >
        <defs>
          <style>
            {`
          .cls-1 {
            fill: ${fillColor};
          }
        `}
          </style>
        </defs>
        <g>
          <g id="_Radial_Repeat_" data-name="&amp;lt;Radial Repeat&amp;gt;">
            <circle className="cls-1" cx="333.78" cy="583.09" r="84.5" />
          </g>
          <g id="_Radial_Repeat_-2" data-name="&amp;lt;Radial Repeat&amp;gt;">
            <circle className="cls-1" cx="84.5" cy="333.78" r="84.5" />
          </g>
          <g id="_Radial_Repeat_-3" data-name="&amp;lt;Radial Repeat&amp;gt;">
            <circle className="cls-1" cx="333.8" cy="84.5" r="84.5" />
          </g>
          <g id="_Radial_Repeat_-4" data-name="&amp;lt;Radial Repeat&amp;gt;">
            <circle className="cls-1" cx="583.09" cy="333.8" r="84.5" />
          </g>
        </g>
        <rect className="cls-1" x="150.79" y="323.79" width="366" height="20" />
        <rect
          className="cls-1"
          x="150.79"
          y="313.79"
          width="366"
          height="20"
          transform="translate(657.59 -10) rotate(90)"
        />
        <path
          className="cls-1"
          d="m82.59,326.79s228.81,389,502.4,0c0,0-246.4,258-502.4,0Z"
        />
        <path
          className="cls-1"
          d="m584.99,340.99s-228.81-389-502.4,0c0,0,228.54-250.2,502.4,0Z"
        />
      </svg>
    </div>
  );
}

export default Logo;
