describe('determine the triangle based on its sides', function() {
 
  beforeEach(function() {
     side1 = 2;
     side2 = 3;
     side3 = 4;
   })

  it('is expected that side1 + side2 > side3', function() {
    expect(side1 + side2).not.toEqual(side3);
    expect(side1 + side2).toBeGreaterThan(side3);
  })

  it('should output equilateral triangle', function() {
    expect(typeOfTriangle(2,2,2)).toEqual("Equilateral Triangle");  
  })
    
  it('should output isosceles triangle', function() {
    expect(typeOfTriangle(2,3,3)).toEqual("Isosceles Triangle");  
  })
   
  it('should output scalene triangle', function() {
    expect(typeOfTriangle(2,3,4)).toEqual("Scalene Triangle");  
  })
  // it('should validate the value of side1', function() {
  //   expect(triangle.side1).toEqual(5);
     
  // })
  // it('should validate the value of side2', function() {
  //   expect(triangle.side2).toEqual(5);
     
  // })
  // it('should validate the value of side3', function() {
  //   expect(triangle.side3).toEqual(4);
     
  // })
  // it('should say not a valid triangle', function() {
  //   expect(triangle).toEqual("Not a triangle");
  // })
})
