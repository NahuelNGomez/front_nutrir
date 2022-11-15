import { FC } from "react";

const LunchIcon: FC<{ color: string; width: number; height: number }> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}pt`}
      height={`${height}pt`}
      viewBox={`0 0 512 512`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M2655 4946 c-41 -18 -83 -69 -90 -109 -3 -18 -5 -275 -3 -572 3 -539
   3 -540 26 -598 33 -81 113 -165 191 -200 33 -15 89 -39 122 -54 78 -35 158
   -119 191 -200 23 -57 23 -65 26 -468 l3 -410 97 -30 c53 -16 161 -61 239 -100
   l142 -71 3 511 c3 508 3 510 26 568 30 74 114 166 179 194 26 12 81 36 121 54
   90 40 169 119 204 206 l23 58 0 567 c0 557 0 567 -21 594 -39 53 -71 69 -134
   69 -63 0 -95 -16 -134 -69 -20 -27 -21 -43 -26 -486 -5 -443 -6 -459 -26 -486
   -39 -53 -71 -69 -134 -69 -63 0 -95 16 -134 69 -20 27 -21 43 -26 486 -5 443
   -6 459 -26 486 -39 53 -71 69 -134 69 -63 0 -95 -16 -134 -69 -20 -27 -21 -43
   -26 -486 -5 -443 -6 -459 -26 -486 -39 -53 -71 -69 -134 -69 -63 0 -95 16
   -134 69 -20 27 -21 43 -26 486 -5 443 -6 459 -26 486 -11 15 -32 37 -46 47
   -33 25 -113 32 -153 13z"
        />
        <path
          d="M1481 4864 c-195 -52 -350 -235 -416 -489 -25 -96 -30 -265 -11 -372
   31 -178 88 -291 220 -432 160 -172 166 -196 166 -657 l0 -353 51 50 c63 62
   163 133 223 160 l46 20 0 237 c0 330 16 383 162 539 43 45 93 107 113 137 169
   265 164 664 -11 928 -131 197 -341 286 -543 232z"
        />
        <path
          d="M1916 2674 c-134 -37 -217 -85 -316 -184 -100 -100 -155 -199 -191
   -344 -20 -78 -28 -95 -64 -131 -36 -36 -53 -44 -131 -64 -146 -36 -245 -91
   -344 -191 -100 -100 -148 -183 -184 -317 l-24 -91 63 -62 63 -63 20 40 c12 22
   30 78 42 124 30 117 71 188 152 264 80 76 135 106 248 135 106 27 165 57 216
   112 59 63 72 87 100 196 35 129 64 184 141 263 76 79 148 120 262 149 46 12
   102 30 124 42 l40 20 -64 64 c-35 35 -64 64 -64 63 0 0 -40 -11 -89 -25z"
        />
        <path
          d="M2225 2444 c-40 -31 -112 -62 -195 -84 -189 -50 -262 -123 -310 -311
   -29 -112 -72 -191 -145 -264 -73 -73 -152 -116 -264 -145 -188 -48 -263 -122
   -311 -309 -21 -84 -46 -142 -81 -192 l-18 -26 58 -57 c55 -55 58 -56 74 -38
   36 39 95 171 117 261 20 83 28 100 65 136 36 37 53 45 136 65 143 36 238 88
   339 190 102 101 154 196 190 339 20 83 28 100 65 136 36 37 53 45 135 65 97
   24 233 85 263 118 16 17 13 21 -41 74 -53 53 -58 56 -77 42z"
        />
        <path
          d="M2455 2214 c-81 -67 -294 -164 -363 -164 -29 0 -44 -24 -63 -98 -41
   -160 -110 -284 -222 -395 -113 -113 -219 -175 -381 -222 -49 -14 -95 -30 -101
   -35 -7 -6 -15 -28 -19 -50 -21 -130 -111 -299 -224 -420 l-60 -65 -90 88 -89
   89 -12 -64 c-6 -34 -13 -81 -14 -103 l-2 -40 148 -32 c251 -53 582 -97 947
   -123 173 -13 941 -26 965 -16 14 5 7 17 -41 69 -74 79 -127 169 -161 272 -23
   71 -26 96 -26 215 0 119 3 144 26 215 38 114 90 198 182 291 128 129 277 198
   457 211 l90 6 23 54 c14 30 34 67 45 83 l20 28 -57 32 c-245 133 -522 200
   -821 200 -121 -1 -128 -2 -157 -26z m-135 -294 l0 -80 -80 0 -80 0 0 80 0 80
   80 0 80 0 0 -80z m400 -80 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z
   m-240 -480 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z m-480 -80 l0 -80
   -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z m-320 -320 l0 -80 -80 0 -80 0 0 80 0
   80 80 0 80 0 0 -80z m320 -160 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z
   m480 0 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z"
        />
        <path
          d="M3965 2148 c-90 -17 -204 -80 -279 -154 -299 -300 -175 -792 234
   -930 76 -26 244 -26 320 0 185 62 314 192 376 376 26 76 26 244 0 320 -53 156
   -153 274 -289 339 -120 58 -234 73 -362 49z m279 -186 c91 -42 149 -100 194
   -190 35 -72 37 -81 37 -172 0 -91 -2 -100 -37 -172 -45 -91 -103 -147 -196
   -191 -61 -29 -76 -32 -162 -32 -86 0 -101 3 -162 32 -93 44 -151 100 -196 191
   -35 72 -37 81 -37 171 0 87 3 102 32 163 40 85 97 147 172 186 78 42 122 52
   213 48 61 -3 92 -11 142 -34z"
        />
        <path
          d="M4000 1827 c-49 -16 -133 -102 -148 -153 -28 -94 -8 -169 63 -239
   102 -103 243 -101 338 5 90 100 90 220 0 320 -65 72 -158 97 -253 67z"
        />
        <path
          d="M3245 1668 c-90 -17 -204 -80 -279 -154 -183 -184 -216 -459 -82
   -688 56 -96 175 -192 287 -231 39 -14 62 -14 233 1 165 14 197 19 236 40 78
   43 175 146 220 234 l19 38 -60 22 c-163 61 -323 213 -394 374 -24 53 -27 56
   -61 56 -128 0 -244 -114 -244 -240 0 -115 116 -240 224 -240 13 0 16 -13 16
   -81 l0 -82 -52 7 c-128 17 -246 103 -305 224 -36 72 -38 81 -38 171 0 87 3
   102 32 163 17 37 50 87 73 112 52 56 160 112 235 121 l55 7 0 79 0 79 -32 -1
   c-18 -1 -55 -5 -83 -11z"
        />
        <path
          d="M428 1207 c-126 -63 -188 -121 -188 -176 0 -39 86 -114 182 -160 100
   -47 224 -92 232 -84 3 4 6 17 6 31 0 14 12 76 26 140 l26 115 -88 88 c-49 49
   -93 89 -99 89 -6 0 -50 -19 -97 -43z"
        />
        <path
          d="M4654 1169 c-38 -55 -139 -146 -208 -188 -87 -52 -209 -90 -315 -98
   l-93 -6 -24 -55 c-13 -30 -40 -77 -60 -104 -19 -28 -33 -52 -30 -55 8 -8 314
   55 454 93 292 80 502 195 502 276 0 48 -67 114 -167 167 -29 15 -27 16 -59
   -30z"
        />
        <path
          d="M240 742 c0 -40 6 -57 27 -83 140 -165 714 -317 1448 -383 551 -50
   1239 -46 1795 10 665 66 1196 212 1339 367 18 20 26 42 29 83 3 31 1 55 -4 53
   -5 -2 -49 -25 -99 -50 -316 -162 -834 -267 -1590 -321 -237 -17 -1013 -17
   -1250 0 -582 42 -1043 118 -1360 224 -71 23 -193 78 -327 146 -5 2 -8 -19 -8
   -46z"
        />
      </g>
    </svg>
  );
};

export default LunchIcon;
