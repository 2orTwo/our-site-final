uniform sampler2D waterNoiseTexture;

varying float vTime;
varying vec2 vUv;

void main() {

float noise = texture2D(waterNoiseTexture, fract(vUv*4.) ).r; 

vec3 color = mix(vec3(4.),vec3(1.0), noise + 0.5) ;
color*=  -sin(noise * vTime) /3.;
color = smoothstep( 0.,0.8 , color );
csm_DiffuseColor = vec4(color ,1.0);


                                                 
                                                                    }