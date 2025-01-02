function xl_board_key_cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-12,4.25],[2.75,4.25]]).appendArc([4.75,2.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([4.75,-11.5]).appendArc([6.75,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.5,-13.5]).appendArc([51.5,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.5,-8.5]).appendArc([53.5,-6.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([68.25,-6.5]).appendArc([70.25,-4.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.25,14.25]).appendArc([72.25,16.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([77.75,16.25]).appendArc([79.75,14.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([79.75,12.25]).appendArc([81.75,10.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([96.5,10.25]).appendArc([98.5,8.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.5,7.25]).appendPoint([102.2136795,7.25]).appendArc([103.8519836,4.1028471],{"radius":2,"clockwise":true,"large":false}).appendPoint([97.4729668,-5.0073331]).appendArc([97.964118,-7.7927901],{"radius":2,"clockwise":false,"large":false}).appendPoint([116.0914351,-20.4856741]).appendArc([116.7262952,-21.2159973],{"radius":2,"clockwise":true,"large":false}).appendPoint([125.7513394,-38.9286439]).appendArc([128.4413334,-39.8026759],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.9344836,-29.3608944]).appendArc([149.8085156,-26.6709004],{"radius":2,"clockwise":false,"large":false}).appendPoint([138.9127436,-5.2867437]).appendArc([136.2227496,-4.4127117],{"radius":2,"clockwise":false,"large":false}).appendPoint([129.7682015,-7.7014682]).appendPoint([133.601482,-2.2269763]).appendArc([133.1103308,0.5584807],{"radius":2,"clockwise":false,"large":false}).appendPoint([123.5538508,7.25]).appendPoint([124.5,7.25]).appendArc([126.5,9.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.5,85.5]).appendArc([124.5,87.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.75,87.5]).appendArc([107.75,89.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.75,90.5]).appendPoint([91,90.5]).appendArc([89,92.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([89,94.5]).appendArc([87,96.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([63,96.5]).appendArc([61,94.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([61,93.5]).appendArc([59,91.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([44.25,91.5]).appendArc([42.25,89.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.25,86.5]).appendArc([40.25,84.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([6.75,84.5]).appendArc([4.75,82.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([4.75,68.75]).appendArc([2.75,66.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12,66.75]).appendArc([-14,64.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([-14,6.25]).appendArc([-12,4.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[105.5,67],[119.5,67]]).appendPoint([119.5,81]).appendPoint([105.5,81]).appendPoint([105.5,67]).close().innerToCAG()
.union(
    new CSG.Path2D([[105.5,49.25],[119.5,49.25]]).appendPoint([119.5,63.25]).appendPoint([105.5,63.25]).appendPoint([105.5,49.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.5,31.5],[119.5,31.5]]).appendPoint([119.5,45.5]).appendPoint([105.5,45.5]).appendPoint([105.5,31.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.5,13.75],[119.5,13.75]]).appendPoint([119.5,27.75]).appendPoint([105.5,27.75]).appendPoint([105.5,13.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.75,70],[100.75,70]]).appendPoint([100.75,84]).appendPoint([86.75,84]).appendPoint([86.75,70]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.75,52.25],[100.75,52.25]]).appendPoint([100.75,66.25]).appendPoint([86.75,66.25]).appendPoint([86.75,52.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.75,34.5],[100.75,34.5]]).appendPoint([100.75,48.5]).appendPoint([86.75,48.5]).appendPoint([86.75,34.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.75,16.75],[100.75,16.75]]).appendPoint([100.75,30.75]).appendPoint([86.75,30.75]).appendPoint([86.75,16.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,76],[82,76]]).appendPoint([82,90]).appendPoint([68,90]).appendPoint([68,76]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,58.25],[82,58.25]]).appendPoint([82,72.25]).appendPoint([68,72.25]).appendPoint([68,58.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,40.5],[82,40.5]]).appendPoint([82,54.5]).appendPoint([68,54.5]).appendPoint([68,40.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,22.75],[82,22.75]]).appendPoint([82,36.75]).appendPoint([68,36.75]).appendPoint([68,22.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,71],[63.25,71]]).appendPoint([63.25,85]).appendPoint([49.25,85]).appendPoint([49.25,71]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,53.25],[63.25,53.25]]).appendPoint([63.25,67.25]).appendPoint([49.25,67.25]).appendPoint([49.25,53.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,35.5],[63.25,35.5]]).appendPoint([63.25,49.5]).appendPoint([49.25,49.5]).appendPoint([49.25,35.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,17.75],[63.25,17.75]]).appendPoint([63.25,31.75]).appendPoint([49.25,31.75]).appendPoint([49.25,17.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,0],[63.25,0]]).appendPoint([63.25,14]).appendPoint([49.25,14]).appendPoint([49.25,0]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,64],[44.5,64]]).appendPoint([44.5,78]).appendPoint([30.5,78]).appendPoint([30.5,64]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,46.25],[44.5,46.25]]).appendPoint([44.5,60.25]).appendPoint([30.5,60.25]).appendPoint([30.5,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,28.5],[44.5,28.5]]).appendPoint([44.5,42.5]).appendPoint([30.5,42.5]).appendPoint([30.5,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,10.75],[44.5,10.75]]).appendPoint([44.5,24.75]).appendPoint([30.5,24.75]).appendPoint([30.5,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,-7],[44.5,-7]]).appendPoint([44.5,7]).appendPoint([30.5,7]).appendPoint([30.5,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,64],[25.75,64]]).appendPoint([25.75,78]).appendPoint([11.75,78]).appendPoint([11.75,64]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,46.25],[25.75,46.25]]).appendPoint([25.75,60.25]).appendPoint([11.75,60.25]).appendPoint([11.75,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,28.5],[25.75,28.5]]).appendPoint([25.75,42.5]).appendPoint([11.75,42.5]).appendPoint([11.75,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,10.75],[25.75,10.75]]).appendPoint([25.75,24.75]).appendPoint([11.75,24.75]).appendPoint([11.75,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.75,-7],[25.75,-7]]).appendPoint([25.75,7]).appendPoint([11.75,7]).appendPoint([11.75,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,46.25],[7,46.25]]).appendPoint([7,60.25]).appendPoint([-7,60.25]).appendPoint([-7,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,28.5],[7,28.5]]).appendPoint([7,42.5]).appendPoint([-7,42.5]).appendPoint([-7,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,10.75],[7,10.75]]).appendPoint([7,24.75]).appendPoint([-7,24.75]).appendPoint([-7,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.9170623,-19.0485816],[129.2729293,-31.522673]]).appendPoint([141.7470207,-25.166806]).appendPoint([135.3911537,-12.6927146]).appendPoint([122.9170623,-19.0485816]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.788125,-5.336184],[117.2562537,-13.3662541]]).appendPoint([125.2863238,-1.8981254]).appendPoint([113.8181951,6.1319447]).appendPoint([105.788125,-5.336184]).close().innerToCAG()
)).union(
    new CSG.Path2D([[302.25,4.25],[317,4.25]]).appendArc([319,6.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([319,64.75]).appendArc([317,66.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([302.25,66.75]).appendArc([300.25,68.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([300.25,82.5]).appendArc([298.25,84.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.75,84.5]).appendArc([262.75,86.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([262.75,89.5]).appendArc([260.75,91.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([246,91.5]).appendArc([244,93.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([244,94.5]).appendArc([242,96.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([218,96.5]).appendArc([216,94.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([216,92.5]).appendArc([214,90.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([199.25,90.5]).appendArc([197.25,88.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.25,87.5]).appendPoint([180.5,87.5]).appendArc([178.5,85.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.5,9.25]).appendArc([180.5,7.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([181.4461492,7.25]).appendPoint([171.8896692,0.5584807]).appendArc([171.398518,-2.2269763],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.2317985,-7.7014682]).appendPoint([168.7772504,-4.4127117]).appendArc([166.0872564,-5.2867437],{"radius":2,"clockwise":false,"large":false}).appendPoint([155.1914844,-26.6709004]).appendArc([156.0655164,-29.3608944],{"radius":2,"clockwise":false,"large":false}).appendPoint([176.5586666,-39.8026759]).appendArc([179.2486606,-38.9286439],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.2737048,-21.2159973]).appendArc([188.9085649,-20.4856742],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.035882,-7.7927901]).appendArc([207.5270332,-5.0073331],{"radius":2,"clockwise":false,"large":false}).appendPoint([201.1480163,4.1028471]).appendArc([202.7863205,7.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.5,7.25]).appendArc([206.5,9.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.5,10.25]).appendPoint([223.25,10.25]).appendArc([225.25,12.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([225.25,14.25]).appendArc([227.25,16.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([232.75,16.25]).appendArc([234.75,14.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([234.75,-4.5]).appendArc([236.75,-6.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([251.5,-6.5]).appendArc([253.5,-8.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.5,-11.5]).appendArc([255.5,-13.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([298.25,-13.5]).appendArc([300.25,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([300.25,2.25]).appendArc([302.25,4.25],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[185.5,67],[199.5,67]]).appendPoint([199.5,81]).appendPoint([185.5,81]).appendPoint([185.5,67]).close().innerToCAG()
.union(
    new CSG.Path2D([[185.5,49.25],[199.5,49.25]]).appendPoint([199.5,63.25]).appendPoint([185.5,63.25]).appendPoint([185.5,49.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.5,31.5],[199.5,31.5]]).appendPoint([199.5,45.5]).appendPoint([185.5,45.5]).appendPoint([185.5,31.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.5,13.75],[199.5,13.75]]).appendPoint([199.5,27.75]).appendPoint([185.5,27.75]).appendPoint([185.5,13.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[204.25,70],[218.25,70]]).appendPoint([218.25,84]).appendPoint([204.25,84]).appendPoint([204.25,70]).close().innerToCAG()
).union(
    new CSG.Path2D([[204.25,52.25],[218.25,52.25]]).appendPoint([218.25,66.25]).appendPoint([204.25,66.25]).appendPoint([204.25,52.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[204.25,34.5],[218.25,34.5]]).appendPoint([218.25,48.5]).appendPoint([204.25,48.5]).appendPoint([204.25,34.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[204.25,16.75],[218.25,16.75]]).appendPoint([218.25,30.75]).appendPoint([204.25,30.75]).appendPoint([204.25,16.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,76],[237,76]]).appendPoint([237,90]).appendPoint([223,90]).appendPoint([223,76]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,58.25],[237,58.25]]).appendPoint([237,72.25]).appendPoint([223,72.25]).appendPoint([223,58.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,40.5],[237,40.5]]).appendPoint([237,54.5]).appendPoint([223,54.5]).appendPoint([223,40.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,22.75],[237,22.75]]).appendPoint([237,36.75]).appendPoint([223,36.75]).appendPoint([223,22.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.75,71],[255.75,71]]).appendPoint([255.75,85]).appendPoint([241.75,85]).appendPoint([241.75,71]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.75,53.25],[255.75,53.25]]).appendPoint([255.75,67.25]).appendPoint([241.75,67.25]).appendPoint([241.75,53.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.75,35.5],[255.75,35.5]]).appendPoint([255.75,49.5]).appendPoint([241.75,49.5]).appendPoint([241.75,35.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.75,17.75],[255.75,17.75]]).appendPoint([255.75,31.75]).appendPoint([241.75,31.75]).appendPoint([241.75,17.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.75,0],[255.75,0]]).appendPoint([255.75,14]).appendPoint([241.75,14]).appendPoint([241.75,0]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.5,64],[274.5,64]]).appendPoint([274.5,78]).appendPoint([260.5,78]).appendPoint([260.5,64]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.5,46.25],[274.5,46.25]]).appendPoint([274.5,60.25]).appendPoint([260.5,60.25]).appendPoint([260.5,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.5,28.5],[274.5,28.5]]).appendPoint([274.5,42.5]).appendPoint([260.5,42.5]).appendPoint([260.5,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.5,10.75],[274.5,10.75]]).appendPoint([274.5,24.75]).appendPoint([260.5,24.75]).appendPoint([260.5,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.5,-7],[274.5,-7]]).appendPoint([274.5,7]).appendPoint([260.5,7]).appendPoint([260.5,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.25,64],[293.25,64]]).appendPoint([293.25,78]).appendPoint([279.25,78]).appendPoint([279.25,64]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.25,46.25],[293.25,46.25]]).appendPoint([293.25,60.25]).appendPoint([279.25,60.25]).appendPoint([279.25,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.25,28.5],[293.25,28.5]]).appendPoint([293.25,42.5]).appendPoint([279.25,42.5]).appendPoint([279.25,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.25,10.75],[293.25,10.75]]).appendPoint([293.25,24.75]).appendPoint([279.25,24.75]).appendPoint([279.25,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.25,-7],[293.25,-7]]).appendPoint([293.25,7]).appendPoint([279.25,7]).appendPoint([279.25,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[298,46.25],[312,46.25]]).appendPoint([312,60.25]).appendPoint([298,60.25]).appendPoint([298,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[298,28.5],[312,28.5]]).appendPoint([312,42.5]).appendPoint([298,42.5]).appendPoint([298,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[298,10.75],[312,10.75]]).appendPoint([312,24.75]).appendPoint([298,24.75]).appendPoint([298,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[175.7270707,-31.522673],[182.0829377,-19.0485816]]).appendPoint([169.6088463,-12.6927146]).appendPoint([163.2529793,-25.166806]).appendPoint([175.7270707,-31.522673]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.7437463,-13.3662541],[199.211875,-5.336184]]).appendPoint([191.1818049,6.1319447]).appendPoint([179.7136762,-1.8981254]).appendPoint([187.7437463,-13.3662541]).close().innerToCAG()
))).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = xl_board_key_cutouts_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        