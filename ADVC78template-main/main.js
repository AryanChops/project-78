var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-600w-582282625.jpg", "https://www.pinclipart.com/picdir/middle/35-353068_mother-with-short-brown-hair-clip-art-at.png" , "https://png.pngtree.com/png-clipart/20190629/original/pngtree-courier-staff-professional-character-cartoon-cute-express-little-brother-png-image_4094552.jpg", "https://image.shutterstock.com/image-vector/cartoon-boy-giving-you-thumbs-600w-143614309.jpg"];
var names = ["Fmaily Book","Papa", "Mommy", "Brother(Ayush)", "Me(Aryan)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    console.log(images[i]);
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
    console.log(names[i]);
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
