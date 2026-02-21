
  varying float modelPosColor;


void main() {

 
 vec3 color = mix(vec3(0.),vec3(0.4, 0., 0.),modelPosColor * 3.2);
//  vec3 color = vec3(0.);

csm_DiffuseColor = vec4(color ,0.5);


                                                 
                                                                    }
