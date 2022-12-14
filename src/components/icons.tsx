// @ts-nocheck

export function AddSmallIcon() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.92578 7.07422V5.92578H6.57422V3.57422H5.42578V5.92578H3.07422V7.07422H5.42578V9.42578H6.57422V7.07422H8.92578ZM1.87109 2.39844C3.01953 1.25 4.39583 0.675781 6 0.675781C7.60417 0.675781 8.97135 1.25 10.1016 2.39844C11.25 3.52865 11.8242 4.89583 11.8242 6.5C11.8242 8.10417 11.25 9.48047 10.1016 10.6289C8.97135 11.7591 7.60417 12.3242 6 12.3242C4.39583 12.3242 3.01953 11.7591 1.87109 10.6289C0.740885 9.48047 0.175781 8.10417 0.175781 6.5C0.175781 4.89583 0.740885 3.52865 1.87109 2.39844Z"
        fill="#696EE3"
      />
    </svg>
  );
}

export function LeftArrowIcon() {
  return (
    <svg width={17} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 7H2m0 0 6-6M2 7l6 6" stroke="#000" strokeWidth={1.5} />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        d="m13.5.5-13 13M.5.5l13 13"
        transform="scale(1.71429)"
      />
    </svg>
  );
}

export function SmallChevronDown() {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={20}
      >
        <path fill="#D9D9D9" d="M0 0h20v20H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="m10 11.771 2.625-2.604h-5.25L10 11.771Zm0 5.812a7.416 7.416 0 0 1-2.948-.593 7.649 7.649 0 0 1-2.417-1.625 7.649 7.649 0 0 1-1.625-2.417A7.415 7.415 0 0 1 2.417 10c0-1.055.198-2.041.593-2.958a7.68 7.68 0 0 1 1.625-2.407A7.648 7.648 0 0 1 7.052 3.01 7.415 7.415 0 0 1 10 2.417a7.39 7.39 0 0 1 2.958.593 7.68 7.68 0 0 1 2.407 1.625 7.649 7.649 0 0 1 1.625 2.417c.395.924.593 1.907.593 2.948a7.416 7.416 0 0 1-.593 2.948 7.65 7.65 0 0 1-1.625 2.417 7.65 7.65 0 0 1-2.417 1.625 7.416 7.416 0 0 1-2.948.593Zm0-1.083c1.805 0 3.34-.632 4.604-1.896C15.868 13.34 16.5 11.805 16.5 10c0-1.805-.632-3.34-1.896-4.604C13.34 4.132 11.805 3.5 10 3.5c-1.805 0-3.34.632-4.604 1.896C4.132 6.66 3.5 8.195 3.5 10c0 1.805.632 3.34 1.896 4.604C6.66 15.868 8.195 16.5 10 16.5Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

export function UnlockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="scale(1.71429)">
        <rect
          x={2}
          y={5.5}
          width={10}
          height={8}
          rx={1}
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          d="M9.47 1.53A3.44 3.44 0 0 0 7 .5 3.5 3.5 0 0 0 3.5 4v1.5"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <circle
          cx={7}
          cy={9.5}
          r={0.5}
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </g>
    </svg>
  );
}

export const LockIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M6.3 21.5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 4.5 19.7v-9.4c0-.5.175-.925.525-1.275.35-.35.775-.525 1.275-.525h1.2v-2c0-1.25.437-2.313 1.312-3.188S10.75 2 12 2c1.25 0 2.313.437 3.188 1.312S16.5 5.25 16.5 6.5v2h1.2c.5 0 .925.175 1.275.525.35.35.525.775.525 1.275v9.4c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525H6.3Zm0-1.5h11.4a.292.292 0 0 0 .213-.087A.292.292 0 0 0 18 19.7v-9.4a.292.292 0 0 0-.087-.213A.292.292 0 0 0 17.7 10H6.3a.289.289 0 0 0-.212.087A.29.29 0 0 0 6 10.3v9.4c0 .083.03.154.088.213A.289.289 0 0 0 6.3 20Zm5.7-3.25c.483 0 .896-.17 1.238-.512.341-.342.512-.755.512-1.238s-.17-.896-.512-1.238A1.689 1.689 0 0 0 12 13.25c-.483 0-.896.17-1.238.512A1.689 1.689 0 0 0 10.25 15c0 .483.17.896.512 1.238.342.341.755.512 1.238.512ZM9 8.5h6v-2c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 3.5c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 6.5v2Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const PrivateIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M17 17c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 17 14c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 15.5 15.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Zm0 3c.517 0 .992-.121 1.425-.363a2.988 2.988 0 0 0 1.05-.962 4.892 4.892 0 0 0-1.175-.5A4.798 4.798 0 0 0 17 18c-.45 0-.883.058-1.3.175a4.892 4.892 0 0 0-1.175.5c.267.4.617.72 1.05.962.433.242.908.363 1.425.363Zm-5 1.475c-2.167-.583-3.958-1.854-5.375-3.812C5.208 15.704 4.5 13.517 4.5 11.1V5.35l7.5-2.8 7.5 2.8V11a13.148 13.148 0 0 0-.737-.238 9.387 9.387 0 0 0-.763-.187V6.4l-6-2.25L6 6.4v4.7c0 .883.125 1.746.375 2.588.25.841.596 1.633 1.038 2.374a9.377 9.377 0 0 0 1.575 1.988 7.82 7.82 0 0 0 1.987 1.4l.025-.025c.133.367.304.717.513 1.05.208.333.445.642.712.925a.511.511 0 0 1-.1.038c-.033.008-.075.02-.125.037Zm5 .025c-1.25 0-2.313-.437-3.188-1.312S12.5 18.25 12.5 17c0-1.25.437-2.313 1.312-3.188S15.75 12.5 17 12.5c1.25 0 2.313.437 3.188 1.312S21.5 15.75 21.5 17c0 1.25-.437 2.313-1.312 3.188S18.25 21.5 17 21.5Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const BrandLogo = () => (
  <svg width={108} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.91 8.738a4.384 4.384 0 0 0-1.766-1.792c-.749-.41-1.623-.616-2.621-.616-1.106 0-2.087.25-2.943.75-.856.5-1.524 1.213-2.006 2.14-.481.928-.722 1.998-.722 3.21 0 1.25.24 2.338.722 3.265.5.928 1.186 1.641 2.06 2.14.874.5 1.89.75 3.05.75 1.426 0 2.594-.375 3.503-1.124.91-.767 1.507-1.828 1.793-3.184H8.56v-2.863H18.67v3.264a8.774 8.774 0 0 1-1.605 3.612c-.82 1.106-1.881 1.998-3.183 2.676-1.284.66-2.728.99-4.333.99-1.802 0-3.433-.401-4.896-1.204a9.076 9.076 0 0 1-3.424-3.398C.41 15.909 0 14.268 0 12.43c0-1.837.41-3.478 1.23-4.923.839-1.463 1.98-2.596 3.424-3.398 1.463-.82 3.085-1.231 4.869-1.231 2.104 0 3.932.517 5.483 1.552 1.552 1.017 2.622 2.452 3.21 4.307H13.91ZM23.073 5.207c-.66 0-1.212-.205-1.658-.616-.428-.428-.642-.954-.642-1.578 0-.625.214-1.142.642-1.552.446-.428.998-.642 1.658-.642.66 0 1.204.214 1.632.642.446.41.669.927.669 1.552 0 .624-.223 1.15-.669 1.578-.428.41-.972.616-1.632.616Zm1.846 1.766v14.822h-3.745V6.973h3.745ZM34.156 6.732c1.106 0 2.078.223 2.916.669.838.428 1.498.99 1.98 1.685V6.973h3.77v14.93c0 1.373-.276 2.595-.828 3.665-.553 1.088-1.382 1.944-2.488 2.569-1.106.642-2.443.963-4.012.963-2.105 0-3.834-.49-5.19-1.472-1.337-.98-2.095-2.319-2.273-4.013h3.718c.196.678.615 1.213 1.257 1.605.66.41 1.453.616 2.38.616 1.088 0 1.971-.33 2.649-.99.677-.643 1.016-1.624 1.016-2.944v-2.3c-.481.695-1.15 1.275-2.006 1.739-.838.463-1.801.695-2.889.695a6.364 6.364 0 0 1-3.424-.963c-1.034-.642-1.854-1.543-2.46-2.702-.59-1.178-.883-2.524-.883-4.04 0-1.499.294-2.828.882-3.987.607-1.16 1.418-2.051 2.434-2.676 1.035-.624 2.185-.936 3.451-.936Zm4.895 7.652c0-.91-.178-1.686-.535-2.328-.356-.66-.838-1.16-1.444-1.498a3.786 3.786 0 0 0-1.953-.535c-.695 0-1.337.17-1.926.508-.588.34-1.07.838-1.444 1.498-.357.643-.535 1.41-.535 2.302 0 .891.178 1.676.535 2.354.374.66.856 1.168 1.444 1.525a3.738 3.738 0 0 0 1.926.535c.696 0 1.346-.17 1.953-.508a3.893 3.893 0 0 0 1.444-1.498c.357-.66.535-1.445.535-2.355ZM57.742 3.12v3.023h-7.784v4.79h5.965v2.97h-5.965v7.892h-3.745V3.12h11.529ZM63.875 1.996v19.8H60.13v-19.8h3.745ZM81.083 14.063c0 .535-.035 1.017-.107 1.445H70.143c.089 1.07.463 1.908 1.123 2.515.66.606 1.471.91 2.434.91 1.391 0 2.381-.598 2.97-1.793h4.039c-.428 1.427-1.249 2.604-2.461 3.532-1.213.91-2.702 1.364-4.467 1.364-1.427 0-2.711-.312-3.852-.936a6.893 6.893 0 0 1-2.648-2.703c-.625-1.159-.937-2.497-.937-4.013 0-1.534.312-2.88.937-4.04a6.533 6.533 0 0 1 2.621-2.676c1.123-.624 2.416-.936 3.879-.936 1.408 0 2.666.303 3.771.91a6.276 6.276 0 0 1 2.595 2.595c.624 1.106.936 2.381.936 3.826Zm-3.879-1.07c-.017-.963-.365-1.73-1.043-2.301-.677-.589-1.507-.883-2.487-.883-.928 0-1.712.285-2.354.856-.624.553-1.008 1.329-1.15 2.328h7.034ZM97.325 14.063c0 .535-.036 1.017-.107 1.445H86.385c.089 1.07.463 1.908 1.123 2.515.66.606 1.471.91 2.434.91 1.391 0 2.38-.598 2.97-1.793h4.038c-.428 1.427-1.248 2.604-2.46 3.532-1.213.91-2.702 1.364-4.468 1.364-1.426 0-2.71-.312-3.851-.936a6.892 6.892 0 0 1-2.649-2.703c-.624-1.159-.936-2.497-.936-4.013 0-1.534.312-2.88.936-4.04a6.533 6.533 0 0 1 2.622-2.676c1.123-.624 2.416-.936 3.878-.936 1.41 0 2.666.303 3.772.91a6.275 6.275 0 0 1 2.595 2.595c.624 1.106.936 2.381.936 3.826Zm-3.879-1.07c-.017-.963-.365-1.73-1.043-2.301-.678-.589-1.507-.883-2.488-.883-.927 0-1.712.285-2.354.856-.624.553-1.007 1.329-1.15 2.328h7.035ZM104.151 10.05v7.17c0 .5.116.865.348 1.097.25.214.66.321 1.23.321h1.739v3.157h-2.354c-3.156 0-4.735-1.534-4.735-4.602V10.05h-1.765V6.973h1.765V3.307h3.772v3.666h3.317v3.077h-3.317Z"
      fill="#000"
    />
  </svg>
);

export const ChevronRight = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const DriverIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M5.625 18.5v1.25a.71.71 0 0 1-.225.538.742.742 0 0 1-.525.212H4.25a.728.728 0 0 1-.75-.75v-7.675L5.55 6.25a.956.956 0 0 1 .4-.55c.2-.133.425-.2.675-.2h10.8c.233 0 .446.071.637.213.192.141.321.32.388.537l2.05 5.825v7.675c0 .217-.07.396-.212.538a.731.731 0 0 1-.538.212h-.625c-.2 0-.375-.07-.525-.212a.71.71 0 0 1-.225-.538V18.5H5.625ZM5.6 10.575h12.8L17.125 7H6.875L5.6 10.575Zm1.875 5.275c.35 0 .654-.13.912-.388.259-.258.388-.57.388-.937 0-.35-.13-.654-.388-.912a1.274 1.274 0 0 0-.937-.388c-.35 0-.654.13-.912.388-.259.258-.388.57-.388.937 0 .35.13.654.388.912.258.259.57.388.937.388Zm9.075 0c.35 0 .654-.13.912-.388.259-.258.388-.57.388-.937 0-.35-.13-.654-.388-.912a1.274 1.274 0 0 0-.937-.388c-.35 0-.654.13-.912.388-.259.258-.388.57-.388.937 0 .35.13.654.388.912.258.259.57.388.937.388ZM5 17h14v-4.925H5V17Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const FleetIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M3.25 20.75V19.1l1.5-1.5v3.15h-1.5Zm4 0V15.1l1.5-1.5v7.15h-1.5Zm4 0V13.6l1.5 1.525v5.625h-1.5Zm4 0v-5.625l1.5-1.5v7.125h-1.5Zm4 0V11.1l1.5-1.5v11.15h-1.5Zm-16-5.525V13.1L10 6.35l4 4 6.75-6.75v2.125L14 12.475l-4-4-6.75 6.75Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const CheckCircleIcon = () => (
  <svg width={80} height={80} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <g filter="url(#b)">
        <circle cx={40} cy={40} r={40} fill="#E8F5EC" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.864 29.17 36.26 54.859 24.894 43.493l1.825-1.825 9.28 9.28 17.814-23.344 2.051 1.566Z"
        fill="#40AC74"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={80} height={80} rx={40} fill="#fff" />
      </clipPath>
      <filter
        id="b"
        x={0}
        y={0}
        width={80}
        height={80}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.25098 0 0 0 0 0.67451 0 0 0 0 0.454902 0 0 0 0.1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_6_4737" />
      </filter>
    </defs>
  </svg>
);

export const ApprovedIcon = () => (
  <svg width={64} height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={64}
      height={64}
    >
      <path fill="#D9D9D9" d="M0 0h64v64H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="m49.933 21.2-2.466-5.733-6-2.667 6-2.533 2.466-5.534 2.467 5.534 6 2.533-6 2.667-2.467 5.733Zm0 38-2.466-5.533-6-2.6 6-2.6 2.466-5.8 2.467 5.8 6 2.6-6 2.6-2.467 5.533ZM22.4 48.467l-5.267-11.334-11.533-5.2L17.133 26.8 22.4 15.533 27.667 26.8 39.2 31.933l-11.533 5.2L22.4 48.467Zm0-7.467 3-6.2 6.333-2.867-6.333-2.8-3-6.2-3 6.2-6.4 2.8 6.4 2.867 3 6.2Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const TuneIcon = () => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M9.708 16.792v-4.584h1.084v1.75h6v1.084h-6v1.75H9.708Zm-6.5-1.75v-1.084h4.584v1.084H3.208Zm3-2.75v-1.75h-3V9.458h3v-1.75h1.084v4.584H6.208Zm3-1.75V9.458h7.584v1.084H9.208Zm3-2.75V3.208h1.084v1.75h3.5v1.084h-3.5v1.75h-1.084Zm-9-1.75V4.958h7.584v1.084H3.208Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const DownloadIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M7.25 16.75h9.5v-1.5h-9.5v1.5Zm4.75-3.1L15.65 10 14.6 8.95l-1.85 1.825V6.25h-1.5v4.525L9.4 8.95 8.35 10 12 13.65Zm0 7.85a9.263 9.263 0 0 1-3.712-.75 9.58 9.58 0 0 1-3.013-2.025 9.58 9.58 0 0 1-2.025-3.013A9.263 9.263 0 0 1 2.5 12c0-1.317.25-2.554.75-3.713a9.583 9.583 0 0 1 2.025-3.012A9.58 9.58 0 0 1 8.288 3.25 9.263 9.263 0 0 1 12 2.5a9.27 9.27 0 0 1 3.713.75 9.583 9.583 0 0 1 3.012 2.025 9.583 9.583 0 0 1 2.025 3.012A9.27 9.27 0 0 1 21.5 12c0 1.317-.25 2.554-.75 3.712a9.58 9.58 0 0 1-2.025 3.013 9.583 9.583 0 0 1-3.012 2.025A9.27 9.27 0 0 1 12 21.5Zm0-1.5c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Z"
        fill="#000"
      />
    </g>
  </svg>
);

export const CalculateIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M8.15 17.85h1.2v-2h2v-1.2h-2v-2h-1.2v2h-2v1.2h2v2Zm5-.75h4.7v-1.2h-4.7v1.2Zm0-2.5h4.7v-1.2h-4.7v1.2Zm.95-3.875 1.4-1.4 1.4 1.4.85-.85-1.4-1.425 1.4-1.4-.85-.85-1.4 1.4-1.4-1.4-.85.85 1.4 1.4-1.4 1.425.85.85ZM6.4 9.05h4.7v-1.2H6.4v1.2ZM5.3 20.5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 3.5 18.7V5.3c0-.5.175-.925.525-1.275.35-.35.775-.525 1.275-.525h13.4c.5 0 .925.175 1.275.525.35.35.525.775.525 1.275v13.4c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525H5.3Zm0-1.5h13.4c.067 0 .133-.033.2-.1s.1-.133.1-.2V5.3c0-.067-.033-.133-.1-.2s-.133-.1-.2-.1H5.3c-.067 0-.133.033-.2.1s-.1.133-.1.2v13.4c0 .067.033.133.1.2s.133.1.2.1Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const DownloadSmall = () => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M6.208 13.792h7.584v-1.084H6.208v1.084ZM10 11.208 12.708 8.5l-.77-.771-1.396 1.417V5.708H9.458v3.438L8.062 7.729l-.77.771L10 11.208Zm0 6.375a7.416 7.416 0 0 1-2.948-.593 7.649 7.649 0 0 1-2.417-1.625 7.649 7.649 0 0 1-1.625-2.417A7.415 7.415 0 0 1 2.417 10c0-1.055.198-2.041.593-2.958a7.68 7.68 0 0 1 1.625-2.407A7.648 7.648 0 0 1 7.052 3.01 7.415 7.415 0 0 1 10 2.417a7.39 7.39 0 0 1 2.958.593 7.68 7.68 0 0 1 2.407 1.625 7.649 7.649 0 0 1 1.625 2.417c.395.924.593 1.907.593 2.948a7.416 7.416 0 0 1-.593 2.948 7.65 7.65 0 0 1-1.625 2.417 7.65 7.65 0 0 1-2.417 1.625 7.416 7.416 0 0 1-2.948.593Zm0-1.083c1.805 0 3.34-.632 4.604-1.896C15.868 13.34 16.5 11.805 16.5 10c0-1.805-.632-3.34-1.896-4.604C13.34 4.132 11.805 3.5 10 3.5c-1.805 0-3.34.632-4.604 1.896C4.132 6.66 3.5 8.195 3.5 10c0 1.805.632 3.34 1.896 4.604C6.66 15.868 8.195 16.5 10 16.5Z"
        fill="#4C7CDA"
      />
    </g>
  </svg>
);
