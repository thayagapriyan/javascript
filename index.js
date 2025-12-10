function z() {
    var a =7;
    console.log(a);
    function x() {
        var b = a + 5;
        console.log(b);
        function y() {
            var c = b + 3;
            console.log(c);
        }
        y();
    }
    x();
}
z();