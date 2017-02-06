 $(function() {
     $('#fullPage').fullpage({
         navigation: true,
         afterLoad: function(anchorLink, index) { //进入
             if (index == 1) {
                 $('.section1 .s1').animate({ 'bottom': '-120px', 'opacity': '1' }, 500);
                 $('.section1 .s2').animate({ 'bottom': '-199px', 'opacity': '1' }, 500);
                 $('.section1 .desc').animate({ 'top': '416px', 'opacity': '1' }, 500);
             }
             if (index == 2) {
                 $('.s2-img-2').animate({ 'left': '65px', 'opacity': '1' }, 500);
                 $('.s2-img-3').animate({ 'right': '149px', 'opacity': '1' }, 500);
                 $('.s2-img').animate({ 'bottom': '0px', 'opacity': '1' }, 500);
                 $('.section2 .desc').animate({ 'left': '420px', 'opacity': '1' }, 500);
                 $('.s2-title').animate({ 'opacity': '1' }, 500);
             }
             if (index == 3) {
                 $('.s3-1').animate({ 'bottom': '-95px', 'opacity': '1' }, 500);
                 $('.s3-2').animate({ 'bottom': '-95px', 'opacity': '1' }, 500);
                 $('.s3-3').animate({ 'bottom': '-95px', 'opacity': '1' }, 500);
                 $('.s3-title').animate({ 'height': '45px' }, 500);
                 $('.section3 .desc').animate({ 'width': '510px', 'opacity': '1' }, 500);
             }
             if (index == 4) {
                 $('.s4-1').animate({ 'opacity': '1', 'left': '190px' }, 500);
                 $('.s4-2').animate({ 'opacity': '1', 'left': '435px' }, 500);
                 $('.s4-3').animate({ 'opacity': '1', 'left': '725px' }, 500);
                 $('.s4-4').animate({ 'opacity': '1', 'right': '205px' }, 500);
                 $('.desc-1').animate({ 'opacity': '1', 'left': '150px' }, 500);
                 $('.desc-2').animate({ 'opacity': '1', 'left': '440px' }, 500);
                 $('.desc-3').animate({ 'opacity': '1', 'left': '720px' }, 500);
                 $('.desc-4').animate({ 'opacity': '1', 'left': '995px' }, 500);
                 $('.s4-title').animate({ 'height': '44px' }, 500);
             }
             if (index == 5) {
                 $('.s5-1').animate({ 'bottom': '0', 'opacity': '1' }, 500);
                 $('.s5-4').animate({ 'bottom': '150px', 'opacity': '1' }, 500);
                 $('.s5-2').animate({ 'bottom': '-70px', 'opacity': '1' }, 500);
                 $('.s5-3').animate({ 'bottom': '-209px', 'opacity': '1' }, 500);
             }
             if (index == 6) {
                 $('.btn').animate({ 'bottom': '150px', 'opacity': '1' }, 500);
                 $('.s6-1').animate({ 'opacity': '1', 'top': '335px' }, 500);
                 $('.s6-title').animate({ 'opacity': '1', 'top': '220px' }, 500);
             }
         },
         onLeave: function(index, nextIndex, direction) { //离开
             if (index == 1) {
                 $('.section1 .s1').animate({ 'bottom': '120px', 'opacity': '0' }, 500);
                 $('.section1 .s2').animate({ 'bottom': '199px', 'opacity': '0' }, 500);
                 $('.section1 .desc').animate({ 'top': '-416px', 'opacity': '0' }, 500);
             }
             if (index == 2) {
                 $('.s2-img-2').animate({ 'left': '-65px', 'opacity': '0' }, 500);
                 $('.s2-img-3').animate({ 'right': '-149px', 'opacity': '0' }, 500);
                 $('.s2-img').animate({ 'bottom': '-325px', 'opacity': '0' }, 500);
                 $('.section2 .desc').animate({ 'left': '-420px', 'opacity': '0' }, 500);
                 $('.s2-title').animate({ 'opacity': '0' }, 500);
             }
             if (index == 3) {
                 $('.s3-1').animate({ 'bottom': '0px', 'opacity': '0' }, 500);
                 $('.s3-2').animate({ 'bottom': '0px', 'opacity': '0' }, 500);
                 $('.s3-3').animate({ 'bottom': '0px', 'opacity': '0' }, 500);
                 $('.s3-title').animate({ 'height': '0px' }, 500);
                 $('.section3 .desc').animate({ 'width': '0px', 'opacity': '0' }, 500);
             }
             if (index == 4) {
                 $('.s4-1').animate({ 'opacity': '0', 'left': '250px' }, 500);
                 $('.s4-2').animate({ 'opacity': '0', 'left': '600px' }, 500);
                 $('.s4-3').animate({ 'opacity': '0', 'left': '600px' }, 500);
                 $('.s4-4').animate({ 'opacity': '0', 'right': '500px' }, 500);
                 $('.desc-1').animate({ 'opacity': '0', 'left': '250px' }, 500);
                 $('.desc-2').animate({ 'opacity': '0', 'left': '600px' }, 500);
                 $('.desc-3').animate({ 'opacity': '0', 'left': '550px' }, 500);
                 $('.desc-4').animate({ 'opacity': '0', 'left': '700px' }, 500);
                 $('.s4-title').animate({ 'height': '0' }, 500);
             }
             if (index == 5) {
                 $('.s5-1').animate({ 'bottom': '850px', 'opacity': '0' }, 500);
                 $('.s5-4').animate({ 'bottom': '850px', 'opacity': '0' }, 500);
                 $('.s5-2').animate({ 'bottom': '135px', 'opacity': '0' }, 500);
                 $('.s5-3').animate({ 'bottom': '0px', 'opacity': '0' }, 500);
             }
             if (index == 6) {
                 $('.btn').animate({ 'bottom': '0px', 'opacity': '0' }, 500);
                 $('.s6-1').animate({ 'opacity': '0', 'top': '500px' }, 500);
                 $('.s6-title').animate({ 'opacity': '0', 'top': '400px' }, 500);
             }
         }

     });

 });
