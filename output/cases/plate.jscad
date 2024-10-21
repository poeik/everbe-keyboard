function xl_board_key_cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-12,-13.5],[30.75,-13.5]]).appendArc([32.75,-11.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([32.75,-8.5]).appendArc([34.75,-6.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([49.5,-6.5]).appendArc([51.5,-4.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.5,14.25]).appendArc([53.5,16.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([59,16.25]).appendArc([61,14.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([61,12.25]).appendArc([63,10.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([77.75,10.25]).appendArc([79.75,8.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([79.75,7.25]).appendPoint([83.4636795,7.25]).appendArc([85.1019836,4.1028471],{"radius":2,"clockwise":true,"large":false}).appendPoint([78.7229668,-5.0073331]).appendArc([79.214118,-7.7927901],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.3414351,-20.4856741]).appendArc([97.9762952,-21.2159973],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.0013394,-38.9286439]).appendArc([109.6913334,-39.8026759],{"radius":2,"clockwise":false,"large":false}).appendPoint([130.1844836,-29.3608944]).appendArc([131.0585156,-26.6709004],{"radius":2,"clockwise":false,"large":false}).appendPoint([120.1627436,-5.2867437]).appendArc([117.4727496,-4.4127117],{"radius":2,"clockwise":false,"large":false}).appendPoint([111.0182015,-7.7014682]).appendPoint([114.851482,-2.2269763]).appendArc([114.3603308,0.5584807],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.8038508,7.25]).appendPoint([105.75,7.25]).appendArc([107.75,9.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([107.75,85.5]).appendArc([105.75,87.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([91,87.5]).appendArc([89,89.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([89,90.5]).appendPoint([72.25,90.5]).appendArc([70.25,92.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([70.25,94.5]).appendArc([68.25,96.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.25,96.5]).appendArc([42.25,94.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([42.25,93.5]).appendArc([40.25,91.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([25.5,91.5]).appendArc([23.5,89.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([23.5,86.5]).appendArc([21.5,84.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12,84.5]).appendArc([-14,82.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([-14,-11.5]).appendArc([-12,-13.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[86.75,67],[100.75,67]]).appendPoint([100.75,81]).appendPoint([86.75,81]).appendPoint([86.75,67]).close().innerToCAG()
.union(
    new CSG.Path2D([[86.75,49.25],[100.75,49.25]]).appendPoint([100.75,63.25]).appendPoint([86.75,63.25]).appendPoint([86.75,49.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.75,31.5],[100.75,31.5]]).appendPoint([100.75,45.5]).appendPoint([86.75,45.5]).appendPoint([86.75,31.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.75,13.75],[100.75,13.75]]).appendPoint([100.75,27.75]).appendPoint([86.75,27.75]).appendPoint([86.75,13.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,70],[82,70]]).appendPoint([82,84]).appendPoint([68,84]).appendPoint([68,70]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,52.25],[82,52.25]]).appendPoint([82,66.25]).appendPoint([68,66.25]).appendPoint([68,52.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,34.5],[82,34.5]]).appendPoint([82,48.5]).appendPoint([68,48.5]).appendPoint([68,34.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[68,16.75],[82,16.75]]).appendPoint([82,30.75]).appendPoint([68,30.75]).appendPoint([68,16.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,76],[63.25,76]]).appendPoint([63.25,90]).appendPoint([49.25,90]).appendPoint([49.25,76]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,58.25],[63.25,58.25]]).appendPoint([63.25,72.25]).appendPoint([49.25,72.25]).appendPoint([49.25,58.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,40.5],[63.25,40.5]]).appendPoint([63.25,54.5]).appendPoint([49.25,54.5]).appendPoint([49.25,40.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.25,22.75],[63.25,22.75]]).appendPoint([63.25,36.75]).appendPoint([49.25,36.75]).appendPoint([49.25,22.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,71],[44.5,71]]).appendPoint([44.5,85]).appendPoint([30.5,85]).appendPoint([30.5,71]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,53.25],[44.5,53.25]]).appendPoint([44.5,67.25]).appendPoint([30.5,67.25]).appendPoint([30.5,53.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,35.5],[44.5,35.5]]).appendPoint([44.5,49.5]).appendPoint([30.5,49.5]).appendPoint([30.5,35.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,17.75],[44.5,17.75]]).appendPoint([44.5,31.75]).appendPoint([30.5,31.75]).appendPoint([30.5,17.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5,0],[44.5,0]]).appendPoint([44.5,14]).appendPoint([30.5,14]).appendPoint([30.5,0]).close().innerToCAG()
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
    new CSG.Path2D([[-7,64],[7,64]]).appendPoint([7,78]).appendPoint([-7,78]).appendPoint([-7,64]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,46.25],[7,46.25]]).appendPoint([7,60.25]).appendPoint([-7,60.25]).appendPoint([-7,46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,28.5],[7,28.5]]).appendPoint([7,42.5]).appendPoint([-7,42.5]).appendPoint([-7,28.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,10.75],[7,10.75]]).appendPoint([7,24.75]).appendPoint([-7,24.75]).appendPoint([-7,10.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[104.1670623,-19.0485816],[110.5229293,-31.522673]]).appendPoint([122.9970207,-25.166806]).appendPoint([116.6411537,-12.6927146]).appendPoint([104.1670623,-19.0485816]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.038125,-5.336184],[98.5062537,-13.3662541]]).appendPoint([106.5363238,-1.8981254]).appendPoint([95.0681951,6.1319447]).appendPoint([87.038125,-5.336184]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
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

        