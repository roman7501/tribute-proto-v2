#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform float time;

varying vec2 vUv;


void main()	{

// Animation en cours
vec2 st = vUv;
vec3 color = vec3(0.0);
float d = 0.0;

// Remap the space to -1. to 1.
st = st *2.-1.;

// Number of sides of your shape
int N = 2;

// Angle and radius from the current pixel
float rotate = .7; // original = PI
float distort1 = sin(time * 0.006) *5.;
float distort2 =sin(time * 0.0008) *.1;

float a = atan(st.x/distort1, st.y/1.)+rotate;
float r = TWO_PI/float(N);

// Shaping function that modulate the distance
d = cos(floor(.5+a/r)*r-a)*length(st) / 1.  ;

color = vec3(1.0-smoothstep(.35,.41,d));

// // Animation 3 waves (à améliorer)
// vec2 st = vUv;
// vec3 color = vec3(0.0);
// float d = 0.0;

// // Remap the space to -1. to 1.
// st = st *2.-1.;

// // Number of sides of your shape
// int N = 2;

// // Angle and radius from the current pixel
// float rotate = .7; // original = PI
// float distort1 = sin(time * 0.06) *5.;
// float distort2 =sin(time * 0.04) *.1;

// float a = atan(st.x/distort1, st.y/1.)+rotate;
// float r = TWO_PI/float(N);

// // Shaping function that modulate the distance
// d = cos(floor(.5+a/r)*r-a)*length(st) / 1.  ;

// color = vec3(1.0-smoothstep(.35,.41,d));


// // Animation 2
// vec2 st = vUv;
// vec3 color = vec3(0.0);
// float d = 0.0;

// // Remap the space to -1. to 1.
// st = st *2.-1.;

// // Number of sides of your shape
// int N = 2;

// // Angle and radius from the current pixel
// float distort1 = sin(time * 0.05) *1.;
// float distort2 = sin(time * 0.05) *1.;
// float a = atan(st.x/distort1,st.y/distort2+PI);
// float r = TWO_PI/float(N);

// // Shaping function that modulate the distance
// d = cos(floor(.5+a/r)*r-a)*length(st);

// color = vec3(1.0-smoothstep(.4,.41,d));

gl_FragColor = vec4(color, .3);


    // End Animation
    //float point = distance(vUv, vec2(0.5)) * 2.;
    //point *= min(time * 0.08, 1.5);
    //vec3 color = 1. - vec3(1.-point);
    
}