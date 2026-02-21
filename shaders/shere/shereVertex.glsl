#include ../include/simplexNoise4d.glsl
attribute vec4 tangent;

uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uSrength;

varying float modelPosColor;

float getWobble(vec3 position){
 return simplexNoise4d(vec4(
      position * uPositionFrequency,
      uTime * uTimeFrequency
    )) * uSrength;
}

void main()
  {
    //tangent 
    vec3 bitTangent = cross(csm_Position,tangent.xyz);
    float shift = 0.1;
vec3 positionA = csm_Position + tangent.xyz * shift;
vec3 positionB = csm_Position + bitTangent * shift;

   

float wobble = getWobble(csm_Position);
csm_Position += wobble * normal;

positionA += getWobble(positionA) * normal;
positionB += getWobble(positionB) * normal;


vec3 toA = normalize(positionA - csm_Position);
vec3 toB = normalize(positionB - csm_Position);

csm_Normal = cross(toA, toB);
  modelPosColor= wobble;

  }