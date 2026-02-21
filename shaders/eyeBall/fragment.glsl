uniform sampler2D scver;
varying float vTime;
varying vec2 vUv;

void main() {


vUv -=0.5;
float l = length(vUv);
float r = 0.3;

vec4 color = smoothstep(0.,1., r, l );

csm_DiffuseColor = vec4(color);


                                              

  











// vec2 eye1 =  step(vec2(0.1), vUv);
// float pct = eye1.x * eye1.y;
// vec2 eye2 =  step(vec2(0.1), 1. - vUv);
// pct *= eye2.x * eye2.y;
// pct = abs (pct );
// // color = mix(vec3(0.),vec3(1., 0., 0.),pct);
// color = vec3(pct);
                                                                    }