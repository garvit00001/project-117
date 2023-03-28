quick_draw_data_set = ["aircraft carrier", "airplane", "alarm clock", "angle"];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
Element_of_array = quick_draw_data_set[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: " + Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
