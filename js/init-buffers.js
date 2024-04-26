function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
    const colorBuffer = initColorBuffer(gl);
    return {
      position: positionBuffer,
      color: colorBuffer,
    };
  }

  function initPositionBuffer(gl) {

    // Create a buffer for the square's positions.
    const positionBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    // Now create an array of positions for the square.
    const positions = [
      0, 0,
      1, 0,
      0.5, .866,
      -0.5, .866,
      -1, 0,
      -0.5, -.866,
      0.5, -.866,
      1, 0
    ];
  
    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  
    return positionBuffer;
  }

  function initColorBuffer(gl) {
    const colors = [
      0.0, 0.0, 0.0, 0.0, // white
      1.0, 0.0, 0.0, 1.0, // red
      0.0, 1.0, 0.0, 1.0, // green
      0.0, 0.0, 1.0, 1.0, // blue
      0.2,0.984,1, 1, // light blue
      1,0.765, 0, 1, // yellow
      1.,0.341,0.2, 1, // orange
      1.0, 0.0, 0.0, 1.0 // back to red
    ];  
    // Create a buffer for the square's colors.
    const colorBuffer = gl.createBuffer();
  
    // Select the colorBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    // Now create an array of colors for the square.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
  }

  export { initBuffers };