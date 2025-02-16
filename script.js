// Prevenir zoom por gestos y atajos de teclado
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
    e.preventDefault();
  }
});

/* ================== FUNCIONES GENERALES ================== */
function filterImages() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const excludeTagsInput = document.getElementById('excludeTags');
  let excludeTags = [];
  if (excludeTagsInput) {
    const excludeTagsStr = excludeTagsInput.value.toLowerCase();
    if (excludeTagsStr.trim() !== "") {
      excludeTags = excludeTagsStr.split(',').map(t => t.trim());
    }
  }
  filteredImages = originalImagesOrder.filter(image => {
    for (let tag of excludeTags) {
      if (tag !== "" && image.genre.toLowerCase().includes(tag)) {
        return false;
      }
    }
    if (searchText) {
      return image.text.toLowerCase().includes(searchText) ||
             image.genre.toLowerCase().includes(searchText);
    }
    return true;
  });
  currentPage = 1;
  showingLastAdded = false;
  renderGallery();
}

function filterByTag(tag) {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = tag;
  filterImages();
}

let images = [

{
        src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-1.jpg',
        text: 'OMASE NA IMOUTO TO ECCHI NA SAIMIN PAKOPAKO LIFE',
        link: 'go:66',
        genre: 'Lolicon, ',
        gallery: [
          { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-25.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-26.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-27.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-28.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-29.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-30.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-31.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-32.jpg', text: 'Detalle 32' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-33.jpg', text: 'Detalle 33' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-34.jpg', text: 'Detalle 34' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-35.jpg', text: 'Detalle 35' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-36.jpg', text: 'Detalle 36' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-37.jpg', text: 'Detalle 37' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-38.jpg', text: 'Detalle 38' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-39.jpg', text: 'Detalle 39' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-40.jpg', text: 'Detalle 40' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-41.jpg', text: 'Detalle 41' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-42.jpg', text: 'Detalle 42' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-43.jpg', text: 'Detalle 43' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-44.jpg', text: 'Detalle 44' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-45.jpg', text: 'Detalle 45' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-46.jpg', text: 'Detalle 46' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-47.jpg', text: 'Detalle 47' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-48.jpg', text: 'Detalle 48' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-49.jpg', text: 'Detalle 49' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-50.jpg', text: 'Detalle 50' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-51.jpg', text: 'Detalle 51' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-52.jpg', text: 'Detalle 52' }, { src: 'https://fullcomics18.org/img17/omase-na-imouto-to-ecchi-na-saimin-pakopako-life-53.jpg', text: 'Detalle 53' }
        ]
      },

{
        src: 'https://fullcomics18.org/img16/no-se-permiten-manies-1.jpg',
        text: 'NO SE PERMITEN MANIES',
        link: 'go:65',
        genre: 'Cartoon, Furry, img, Lolicon,',
        gallery: [
          { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-25.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-26.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-27.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-28.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-29.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-30.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-31.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-32.jpg', text: 'Detalle 32' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-33.jpg', text: 'Detalle 33' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-34.jpg', text: 'Detalle 34' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-35.jpg', text: 'Detalle 35' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-36.jpg', text: 'Detalle 36' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-37.jpg', text: 'Detalle 37' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-38.jpg', text: 'Detalle 38' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-39.jpg', text: 'Detalle 39' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-40.jpg', text: 'Detalle 40' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-41.jpg', text: 'Detalle 41' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-42.jpg', text: 'Detalle 42' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-43.jpg', text: 'Detalle 43' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-44.jpg', text: 'Detalle 44' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-45.jpg', text: 'Detalle 45' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-46.jpg', text: 'Detalle 46' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-47.jpg', text: 'Detalle 47' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-48.jpg', text: 'Detalle 48' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-49.jpg', text: 'Detalle 49' }, { src: 'https://fullcomics18.org/img16/no-se-permiten-manies-50.jpg', text: 'Detalle 50' }
        ]
      },

{
        src: 'https://fullcomics18.org/img20/orihime-x-kazui-bath-time-1.jpg',
        text: 'ORIHIME x KAZUI',
        link: 'go:64',
        genre: 'Hentai, shotacon, ',
        gallery: [
          { src: 'https://fullcomics18.org/img20/orihime-x-kazui-bath-time-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img20/orihime-x-kazui-bath-time-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img20/orihime-x-kazui-bath-time-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img20/orihime-x-kazui-bath-time-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img20/orihime-x-kazui-bath-time-5.jpg', text: 'Detalle 5' }
        ]
      },

{
        src: 'https://fullcomics18.org/img21/sweet-tooth-1.jpg',
        text: 'SWEET TOOTH',
        link: 'go:63',
        genre: 'Hentai, shotacon, ',
        gallery: [
          { src: 'https://fullcomics18.org/img21/sweet-tooth-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-25.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-26.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-27.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-28.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-29.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-30.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-31.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img21/sweet-tooth-32.jpg', text: 'Detalle 32' }
        ]
      },

{
        src: 'https://fullcomics18.org/img14/off-duty-1.jpg',
        text: 'OFF DUTY',
        link: 'go:62',
        genre: 'Furry, zootopia, Disney, Cartoon,',
        gallery: [
          { src: 'https://fullcomics18.org/img14/off-duty-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img14/off-duty-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img14/off-duty-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img14/off-duty-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img14/off-duty-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img14/off-duty-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img14/off-duty-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img14/off-duty-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img14/off-duty-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img14/off-duty-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img14/off-duty-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img14/off-duty-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img14/off-duty-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img14/off-duty-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img14/off-duty-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img14/off-duty-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img14/off-duty-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img14/off-duty-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img14/off-duty-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img14/off-duty-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img14/off-duty-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img14/off-duty-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img14/off-duty-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img14/off-duty-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img14/off-duty-25.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img14/off-duty-26.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img14/off-duty-27.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img14/off-duty-28.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img14/off-duty-29.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img14/off-duty-30.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img14/off-duty-31.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img14/off-duty-32.jpg', text: 'Detalle 32' }
        ]
      },

{
        src: 'https://fullcomics18.org/img16/dark-green-1.jpg',
        text: 'DARK GREEN',
        link: 'go:61',
        genre: 'Furry, ',
        gallery: [
          { src: 'https://fullcomics18.org/img16/dark-green-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img16/dark-green-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img16/dark-green-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img16/dark-green-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img16/dark-green-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img16/dark-green-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img16/dark-green-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img16/dark-green-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img16/dark-green-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img16/dark-green-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img16/dark-green-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img16/dark-green-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img16/dark-green-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img16/dark-green-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img16/dark-green-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img16/dark-green-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img16/dark-green-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img16/dark-green-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img16/dark-green-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img16/dark-green-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img16/dark-green-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img16/dark-green-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img16/dark-green-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img16/dark-green-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img16/dark-green-25.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img16/dark-green-26.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img16/dark-green-27.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img16/dark-green-28.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img16/dark-green-29.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img16/dark-green-30.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img16/dark-green-31.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img16/dark-green-32.jpg', text: 'Detalle 32' }, { src: 'https://fullcomics18.org/img16/dark-green-33.jpg', text: 'Detalle 33' }, { src: 'https://fullcomics18.org/img16/dark-green-34.jpg', text: 'Detalle 34' }, { src: 'https://fullcomics18.org/img16/dark-green-35.jpg', text: 'Detalle 35' }, { src: 'https://fullcomics18.org/img16/dark-green-36.jpg', text: 'Detalle 36' }, { src: 'https://fullcomics18.org/img16/dark-green-37.jpg', text: 'Detalle 37' }, { src: 'https://fullcomics18.org/img16/dark-green-38.jpg', text: 'Detalle 38' }, { src: 'https://fullcomics18.org/img16/dark-green-39.jpg', text: 'Detalle 39' }
        ]
      },

{
        src: 'https://fullcomics18.org/img21/roxy-after-dark2-1.jpg',
        text: 'ROXY AFTER DARK 2',
        link: 'go:60',
        genre: 'Furry, fnaf, ',
        gallery: [
          { src: 'https://fullcomics18.org/img21/roxy-after-dark2-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img21/roxy-after-dark2-25.jpg', text: 'Detalle 25' }
        ]
      },

{
        src: 'https://fullcomics18.org/img10/good-boi-1.jpg',
        text: 'GOOD BOI',
        link: 'go:59',
        genre: 'Femboy, ',
        gallery: [
          { src: 'https://fullcomics18.org/img10/good-boi-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img10/good-boi-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img10/good-boi-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img10/good-boi-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img10/good-boi-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img10/good-boi-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img10/good-boi-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img10/good-boi-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img10/good-boi-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img10/good-boi-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img10/good-boi-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img10/good-boi-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img10/good-boi-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img10/good-boi-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img10/good-boi-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img10/good-boi-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img10/good-boi-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img10/good-boi-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img10/good-boi-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img10/good-boi-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img10/good-boi-21.jpg', text: 'Detalle 21' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-01.jpg',
        text: 'SISSY BUDDIES 1',
        link: 'go:58',
        genre: 'Femboy, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sissy-Buddies-Futanari-10.jpg', text: 'Detalle 10' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-01.jpg',
        text: 'LINK X BOWSER',
        link: 'go:57',
        genre: 'Femboy, link, bowser, Super Mario, Mario, videojuego, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/01/Link-x-Bowser-Yaoi-07.jpg', text: 'Detalle 7' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-01.jpg',
        text: 'SWEET STING 2',
        link: 'go:56',
        genre: 'Zootopia, Furry, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-010.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-011.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-012.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-013.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-014.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-015.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-016.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-017.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-018.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-019.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-020.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-021.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-022.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-023.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-024.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-025.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-026.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-027.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-028.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-029.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-030.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-031.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-032.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-033.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-034.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-035.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-036.jpg', text: 'Detalle 36' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-037.jpg', text: 'Detalle 37' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-038.jpg', text: 'Detalle 38' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-039.jpg', text: 'Detalle 39' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-040.jpg', text: 'Detalle 40' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-041.jpg', text: 'Detalle 41' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-042.jpg', text: 'Detalle 42' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-043.jpg', text: 'Detalle 43' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-044.jpg', text: 'Detalle 44' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-045.jpg', text: 'Detalle 45' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-046.jpg', text: 'Detalle 46' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-047.jpg', text: 'Detalle 47' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-048.jpg', text: 'Detalle 48' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-049.jpg', text: 'Detalle 49' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-050.jpg', text: 'Detalle 50' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-051.jpg', text: 'Detalle 51' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-052.jpg', text: 'Detalle 52' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-053.jpg', text: 'Detalle 53' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-054.jpg', text: 'Detalle 54' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Sweet-Sting-2-055.jpg', text: 'Detalle 55' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-1.webp',
        text: 'TRUE FELINES',
        link: 'go:55',
        genre: 'Furry, incesto, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-1.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-2.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-3.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-4.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-5.webp', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-6.webp', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-7.webp', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-8.webp', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-9.webp', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-10.webp', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-11.webp', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-12.webp', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-13.webp', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-14.webp', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-15.webp', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-16.webp', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-17.webp', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-18.webp', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-19.webp', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-20.webp', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-21.webp', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-22.webp', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-23.webp', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-24.webp', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/True-Felines-LizzardSama-25.webp', text: 'Detalle 25' }
        ]
      },

{
        src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-1.jpg',
        text: 'LOLACOLN – DIA DE SAN VALENTIN',
        link: 'go:54',
        genre: 'San Valentín, Cartoon, The Loud House, Incesto, Lolicon, ',
        gallery: [
          { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img10/lolacoln-dia-de-san-valentin-7.jpg', text: 'Detalle 7' }
        ]
      },


{
        src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-01-1.jpg',
        text: 'SAN VALENTIN – SIMPSONS',
        link: 'go:53',
        genre: 'San Valentín, Cartoon, Los Simpson, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-01-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/San-Valentin-18.jpg', text: 'Detalle 18' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2023/02/Cita-de-San-Valentin-Greendogg-01.jpg',
        text: 'CITA DE SAN VALENTIN',
        link: 'go:52',
        genre: 'San Valentín, Cartoon, Incesto, The loud house, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2023/02/Cita-de-San-Valentin-Greendogg-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2023/02/Cita-de-San-Valentin-Greendogg-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2023/02/Cita-de-San-Valentin-Greendogg-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2023/02/Cita-de-San-Valentin-Greendogg-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2023/02/Cita-de-San-Valentin-Greendogg-05.jpg', text: 'Detalle 5' }
        ]
      },

{
        src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/mini_comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-16219.jpg',
        text: 'MILF VALENTINE',
        link: 'go:51',
        genre: 'San Valentín, Hentai, ',
        gallery: [
          { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-247501075.jpg', text: 'Detalle 1' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-160614844.jpg', text: 'Detalle 2' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-129023511.jpg', text: 'Detalle 3' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-94034184.jpg', text: 'Detalle 4' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-297242486.jpg', text: 'Detalle 5' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-426651177.jpg', text: 'Detalle 6' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-336362013.jpg', text: 'Detalle 7' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-386074609.jpg', text: 'Detalle 8' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-452284830.jpg', text: 'Detalle 9' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-18119830.jpg', text: 'Detalle 10' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-501103349.jpg', text: 'Detalle 11' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-358114218.jpg', text: 'Detalle 12' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-262712422.jpg', text: 'Detalle 13' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-71713856.jpg', text: 'Detalle 14' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-3431144173.jpg', text: 'Detalle 15' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-181715699.jpg', text: 'Detalle 16' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-4790163121.jpg', text: 'Detalle 17' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-467217517.jpg', text: 'Detalle 18' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-314182153.jpg', text: 'Detalle 19' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-3115193567.jpg', text: 'Detalle 20' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-256920842.jpg', text: 'Detalle 21' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-4286213117.jpg', text: 'Detalle 22' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-3187222565.jpg', text: 'Detalle 23' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-864234382.jpg', text: 'Detalle 24' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-362241038.jpg', text: 'Detalle 25' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-2965254526.jpg', text: 'Detalle 26' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-749263680.jpg', text: 'Detalle 27' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-4495272454.jpg', text: 'Detalle 28' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04-3304281163.jpg', text: 'Detalle 29' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/-2022-03-04-174601834.jpg', text: 'Detalle 30' }, { src: 'https://imges.sexkomix2.com/uploads_images/comic-porno-milf-valentine-comico-de-sexo-seleccion-de-artes-2022-03-04/-2022-03-04-292512714.jpg', text: 'Detalle 31' }
        ]
      },

{
        src: 'https://fullcomics18.org/img18/dream-hunt-1.jpg',
        text: 'DREAM HUNT',
        link: 'go:50',
        genre: 'Furry, Pokémon',
        gallery: [
          { src: 'https://fullcomics18.org/img18/dream-hunt-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img18/dream-hunt-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img18/dream-hunt-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img18/dream-hunt-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img18/dream-hunt-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img18/dream-hunt-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img18/dream-hunt-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img18/dream-hunt-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img18/dream-hunt-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img18/dream-hunt-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img18/dream-hunt-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img18/dream-hunt-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img18/dream-hunt-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img18/dream-hunt-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img18/dream-hunt-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img18/dream-hunt-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img18/dream-hunt-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img18/dream-hunt-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img18/dream-hunt-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img18/dream-hunt-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img18/dream-hunt-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img18/dream-hunt-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img18/dream-hunt-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img18/dream-hunt-24.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img18/dream-hunt-25.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img18/dream-hunt-26.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img18/dream-hunt-27.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img18/dream-hunt-28.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img18/dream-hunt-29.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img18/dream-hunt-30.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img18/dream-hunt-31.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img18/dream-hunt-32.jpg', text: 'Detalle 32' }, { src: 'https://fullcomics18.org/img18/dream-hunt-33.jpg', text: 'Detalle 33' }, { src: 'https://fullcomics18.org/img18/dream-hunt-34.jpg', text: 'Detalle 34' }, { src: 'https://fullcomics18.org/img18/dream-hunt-35.jpg', text: 'Detalle 35' }, { src: 'https://fullcomics18.org/img18/dream-hunt-36.jpg', text: 'Detalle 36' }, { src: 'https://fullcomics18.org/img18/dream-hunt-37.jpg', text: 'Detalle 37' }, { src: 'https://fullcomics18.org/img18/dream-hunt-38.jpg', text: 'Detalle 38' }, { src: 'https://fullcomics18.org/img18/dream-hunt-39.jpg', text: 'Detalle 39' }, { src: 'https://fullcomics18.org/img18/dream-hunt-40.jpg', text: 'Detalle 40' }, { src: 'https://fullcomics18.org/img18/dream-hunt-41.jpg', text: 'Detalle 41' }, { src: 'https://fullcomics18.org/img18/dream-hunt-42.jpg', text: 'Detalle 42' }, { src: 'https://fullcomics18.org/img18/dream-hunt-43.jpg', text: 'Detalle 43' }, { src: 'https://fullcomics18.org/img18/dream-hunt-44.jpg', text: 'Detalle 44' }, { src: 'https://fullcomics18.org/img18/dream-hunt-45.jpg', text: 'Detalle 45' }, { src: 'https://fullcomics18.org/img18/dream-hunt-46.jpg', text: 'Detalle 46' }, { src: 'https://fullcomics18.org/img18/dream-hunt-47.jpg', text: 'Detalle 47' }, { src: 'https://fullcomics18.org/img18/dream-hunt-48.jpg', text: 'Detalle 48' }, { src: 'https://fullcomics18.org/img18/dream-hunt-49.jpg', text: 'Detalle 49' }, { src: 'https://fullcomics18.org/img18/dream-hunt-50.jpg', text: 'Detalle 50' }, { src: 'https://fullcomics18.org/img18/dream-hunt-51.jpg', text: 'Detalle 51' }, { src: 'https://fullcomics18.org/img18/dream-hunt-52.jpg', text: 'Detalle 52' }, { src: 'https://fullcomics18.org/img18/dream-hunt-53.jpg', text: 'Detalle 53' }, { src: 'https://fullcomics18.org/img18/dream-hunt-54.jpg', text: 'Detalle 54' }, { src: 'https://fullcomics18.org/img18/dream-hunt-55.jpg', text: 'Detalle 55' }, { src: 'https://fullcomics18.org/img18/dream-hunt-56.jpg', text: 'Detalle 56' }, { src: 'https://fullcomics18.org/img18/dream-hunt-57.jpg', text: 'Detalle 57' }, { src: 'https://fullcomics18.org/img18/dream-hunt-58.jpg', text: 'Detalle 58' }, { src: 'https://fullcomics18.org/img18/dream-hunt-59.jpg', text: 'Detalle 59' }, { src: 'https://fullcomics18.org/img18/dream-hunt-60.jpg', text: 'Detalle 60' }, { src: 'https://fullcomics18.org/img18/dream-hunt-61.jpg', text: 'Detalle 61' }, { src: 'https://fullcomics18.org/img18/dream-hunt-62.jpg', text: 'Detalle 62' }, { src: 'https://fullcomics18.org/img18/dream-hunt-63.jpg', text: 'Detalle 63' }, { src: 'https://fullcomics18.org/img18/dream-hunt-64.jpg', text: 'Detalle 64' }, { src: 'https://fullcomics18.org/img18/dream-hunt-65.jpg', text: 'Detalle 65' }, { src: 'https://fullcomics18.org/img18/dream-hunt-66.jpg', text: 'Detalle 66' }, { src: 'https://fullcomics18.org/img18/dream-hunt-67.jpg', text: 'Detalle 67' }, { src: 'https://fullcomics18.org/img18/dream-hunt-68.jpg', text: 'Detalle 68' }, { src: 'https://fullcomics18.org/img18/dream-hunt-69.jpg', text: 'Detalle 69' }, { src: 'https://fullcomics18.org/img18/dream-hunt-70.jpg', text: 'Detalle 70' }, { src: 'https://fullcomics18.org/img18/dream-hunt-71.jpg', text: 'Detalle 71' }, { src: 'https://fullcomics18.org/img18/dream-hunt-72.jpg', text: 'Detalle 72' }, { src: 'https://fullcomics18.org/img18/dream-hunt-73.jpg', text: 'Detalle 73' }, { src: 'https://fullcomics18.org/img18/dream-hunt-74.jpg', text: 'Detalle 74' }, { src: 'https://fullcomics18.org/img18/dream-hunt-75.jpg', text: 'Detalle 75' }, { src: 'https://fullcomics18.org/img18/dream-hunt-76.jpg', text: 'Detalle 76' }, { src: 'https://fullcomics18.org/img18/dream-hunt-77.jpg', text: 'Detalle 77' }, { src: 'https://fullcomics18.org/img18/dream-hunt-78.jpg', text: 'Detalle 78' }, { src: 'https://fullcomics18.org/img18/dream-hunt-79.jpg', text: 'Detalle 79' }, { src: 'https://fullcomics18.org/img18/dream-hunt-80.jpg', text: 'Detalle 80' }, { src: 'https://fullcomics18.org/img18/dream-hunt-81.jpg', text: 'Detalle 81' }, { src: 'https://fullcomics18.org/img18/dream-hunt-82.jpg', text: 'Detalle 82' }, { src: 'https://fullcomics18.org/img18/dream-hunt-83.jpg', text: 'Detalle 83' }, { src: 'https://fullcomics18.org/img18/dream-hunt-84.jpg', text: 'Detalle 84' }, { src: 'https://fullcomics18.org/img18/dream-hunt-85.jpg', text: 'Detalle 85' }, { src: 'https://fullcomics18.org/img18/dream-hunt-86.jpg', text: 'Detalle 86' }, { src: 'https://fullcomics18.org/img18/dream-hunt-87.jpg', text: 'Detalle 87' }, { src: 'https://fullcomics18.org/img18/dream-hunt-88.jpg', text: 'Detalle 88' }, { src: 'https://fullcomics18.org/img18/dream-hunt-89.jpg', text: 'Detalle 89' }, { src: 'https://fullcomics18.org/img18/dream-hunt-90.jpg', text: 'Detalle 90' }, { src: 'https://fullcomics18.org/img18/dream-hunt-91.jpg', text: 'Detalle 91' }, { src: 'https://fullcomics18.org/img18/dream-hunt-92.jpg', text: 'Detalle 92' }, { src: 'https://fullcomics18.org/img18/dream-hunt-93.jpg', text: 'Detalle 93' }
        ]
      },

{
        src: 'https://fullcomics18.org/img20/the-ancient-relic-1.jpg',
        text: 'THE ANCIENT RELIC',
        link: 'go:49',
        genre: 'Furry, Lolicon, Disney, Cartoon,',
        gallery: [
          { src: 'https://fullcomics18.org/img20/the-ancient-relic-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img20/the-ancient-relic-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img20/the-ancient-relic-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img20/the-ancient-relic-4.jpg', text: 'Detalle 4' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-01.jpg',
        text: 'CHERRY ROAD 5',
        link: 'go:48',
        genre: 'Zombie, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Charlando-con-un-Zombie-24.jpg', text: 'Detalle 24' }
        ]
      },

{
        src: 'https://fullcomics18.org/img10/the-loud-timeline-1.jpg',
        text: 'THE LOUD TIMELINE',
        link: 'go:47',
        genre: 'Lolicon, The Loud House, Incesto, Cartoon,',
        gallery: [
          { src: 'https://fullcomics18.org/img10/the-loud-timeline-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-21.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-22.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-23.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-24.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-25.jpg', text: 'Detalle 24' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-26.jpg', text: 'Detalle 25' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-27.jpg', text: 'Detalle 26' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-28.jpg', text: 'Detalle 27' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-29.jpg', text: 'Detalle 28' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-30.jpg', text: 'Detalle 29' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-31.jpg', text: 'Detalle 30' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-32.jpg', text: 'Detalle 31' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-33.jpg', text: 'Detalle 32' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-34.jpg', text: 'Detalle 33' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-35.jpg', text: 'Detalle 34' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-36.jpg', text: 'Detalle 35' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-37.jpg', text: 'Detalle 36' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-38.jpg', text: 'Detalle 37' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-39.jpg', text: 'Detalle 38' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-40.jpg', text: 'Detalle 39' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-41.jpg', text: 'Detalle 40' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-42.jpg', text: 'Detalle 41' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-43.jpg', text: 'Detalle 42' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-44.jpg', text: 'Detalle 43' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-45.jpg', text: 'Detalle 44' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-46.jpg', text: 'Detalle 45' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-47.jpg', text: 'Detalle 46' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-48.jpg', text: 'Detalle 47' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-49.jpg', text: 'Detalle 48' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-50.jpg', text: 'Detalle 49' }, { src: 'https://fullcomics18.org/img10/the-loud-timeline-51.jpg', text: 'Detalle 50' }
        ]
      },

{
        src: 'https://fullcomics18.org/img10/goten-top-1.jpg',
        text: 'GOTEN TOP',
        link: 'go:46',
        genre: 'Goku, Gay, ',
        gallery: [
          { src: 'https://fullcomics18.org/img10/goten-top-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img10/goten-top-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img10/goten-top-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img10/goten-top-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img10/goten-top-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img10/goten-top-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img10/goten-top-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img10/goten-top-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img10/goten-top-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img10/goten-top-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img10/goten-top-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img10/goten-top-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img10/goten-top-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img10/goten-top-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img10/goten-top-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img10/goten-top-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img10/goten-top-17.jpg', text: 'Detalle 17' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-1.jpg',
        text: 'VIEJAS COSTUMBRES 2',
        link: 'go:45',
        genre: 'Los Simpson, Incesto, Cartoon, Disney',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-2-20.jpg', text: 'Detalle 20' }
        ]
      },

{
        src: 'https://fullcomics18.org/img7/the-waterpark-1.jpg',
        text: 'THE WATERPARK',
        link: 'go:44',
        genre: 'Acidente, Parque acuático, ',
        gallery: [
          { src: 'https://fullcomics18.org/img7/the-waterpark-1.jpg', text: 'Detalle 1' }, { src: 'https://fullcomics18.org/img7/the-waterpark-2.jpg', text: 'Detalle 2' }, { src: 'https://fullcomics18.org/img7/the-waterpark-3.jpg', text: 'Detalle 3' }, { src: 'https://fullcomics18.org/img7/the-waterpark-4.jpg', text: 'Detalle 4' }, { src: 'https://fullcomics18.org/img7/the-waterpark-5.jpg', text: 'Detalle 5' }, { src: 'https://fullcomics18.org/img7/the-waterpark-6.jpg', text: 'Detalle 6' }, { src: 'https://fullcomics18.org/img7/the-waterpark-7.jpg', text: 'Detalle 7' }, { src: 'https://fullcomics18.org/img7/the-waterpark-8.jpg', text: 'Detalle 8' }, { src: 'https://fullcomics18.org/img7/the-waterpark-9.jpg', text: 'Detalle 9' }, { src: 'https://fullcomics18.org/img7/the-waterpark-10.jpg', text: 'Detalle 10' }, { src: 'https://fullcomics18.org/img7/the-waterpark-11.jpg', text: 'Detalle 11' }, { src: 'https://fullcomics18.org/img7/the-waterpark-12.jpg', text: 'Detalle 12' }, { src: 'https://fullcomics18.org/img7/the-waterpark-13.jpg', text: 'Detalle 13' }, { src: 'https://fullcomics18.org/img7/the-waterpark-14.jpg', text: 'Detalle 14' }, { src: 'https://fullcomics18.org/img7/the-waterpark-15.jpg', text: 'Detalle 15' }, { src: 'https://fullcomics18.org/img7/the-waterpark-16.jpg', text: 'Detalle 16' }, { src: 'https://fullcomics18.org/img7/the-waterpark-17.jpg', text: 'Detalle 17' }, { src: 'https://fullcomics18.org/img7/the-waterpark-18.jpg', text: 'Detalle 18' }, { src: 'https://fullcomics18.org/img7/the-waterpark-19.jpg', text: 'Detalle 19' }, { src: 'https://fullcomics18.org/img7/the-waterpark-20.jpg', text: 'Detalle 20' }, { src: 'https://fullcomics18.org/img7/the-waterpark-21.jpg', text: 'Detalle 21' }, { src: 'https://fullcomics18.org/img7/the-waterpark-22.jpg', text: 'Detalle 22' }, { src: 'https://fullcomics18.org/img7/the-waterpark-23.jpg', text: 'Detalle 23' }, { src: 'https://fullcomics18.org/img7/the-waterpark-24.jpg', text: 'Detalle 24' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-1.jpg',
        text: 'CHLOE',
        link: 'go:43',
        genre: 'Hentai, demonios, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/chloe-30.jpg', text: 'Detalle 30' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-01.jpg',
        text: 'MILFS CATCHER’S 2',
        link: 'go:42',
        genre: 'Los padrinos mágicos, Cartoon, Los Simpson, Incesto, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-19-scaled.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-20-scaled.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-21-scaled.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-22-scaled.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-23-scaled.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-24-scaled.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-25-scaled.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-26-scaled.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-27-scaled.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-28-scaled.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-29-scaled.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-30-scaled.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-31-scaled.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-32-scaled.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-33-scaled.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-34-scaled.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-35-scaled.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-36-scaled.jpg', text: 'Detalle 36' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-1.jpg',
        text: 'MILFS CATCHER’S 1',
        link: 'go:41',
        genre: 'Los padrinos mágicos, Cartoon, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-33.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-34.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-35.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-36.jpg', text: 'Detalle 36' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Milfs-Catchers-1-37.jpg', text: 'Detalle 37' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-1.jpg',
        text: 'VIEJAS COSTUMBRES 1',
        link: 'go:40',
        genre: 'Los Simpson, Incesto, Cartoon, Disney, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/Viejas-Costumbres-1-21.jpg', text: 'Detalle 21' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-01.jpg',
        text: 'SKY ROCKETS',
        link: 'go:39',
        genre: 'Padre de familia, Cartoon, Disney, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Sky-Rockets-Family-Guy-Hentai-12.jpg', text: 'Detalle 12' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-0.jpg',
        text: 'CHIQUITO PERO PICOSO',
        link: 'go:38',
        genre: 'Cartoon, Femboy, Furry, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-0.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-1.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-2.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-3.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-4.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-5.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-6.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-7.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-8.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-9.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-10.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-11.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-12.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-13.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-14.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-15.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-16.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-17.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-18.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-19.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-20.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-21.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-22.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-23.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-24.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-25.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-26.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-27.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-28.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-29.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-30.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-31.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-32.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-33.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-34.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-35.jpg', text: 'Detalle 36' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-36.jpg', text: 'Detalle 37' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-37.jpg', text: 'Detalle 38' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-38.jpg', text: 'Detalle 39' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-39.jpg', text: 'Detalle 40' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-40.jpg', text: 'Detalle 41' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-41.jpg', text: 'Detalle 42' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-42.jpg', text: 'Detalle 43' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-43.jpg', text: 'Detalle 44' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-44.jpg', text: 'Detalle 45' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-45.jpg', text: 'Detalle 46' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-46.jpg', text: 'Detalle 47' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-47.jpg', text: 'Detalle 48' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-48.jpg', text: 'Detalle 49' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-49.jpg', text: 'Detalle 50' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-50.jpg', text: 'Detalle 51' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Speedy-X-Bugs-JinAsault-51.jpg', text: 'Detalle 52' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-01.jpg',
        text: 'GUMBALL GHOST BUSTER',
        link: 'go:37',
        genre: 'Cartoon, Fantasma, Gumball, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Gumball-Ghost-Buster-Garabatoz-13.jpg', text: 'Detalle 13' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/03/The-Landlords-Daughter-Rapscallion-01.webp',
        text: 'LA HIJA DEL CASERO',
        link: 'go:36',
        genre: 'Hentai, Fantasma, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/03/The-Landlords-Daughter-Rapscallion-01.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/03/The-Landlords-Daughter-Rapscallion-02.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/03/The-Landlords-Daughter-Rapscallion-03.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/03/The-Landlords-Daughter-Rapscallion-04.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/03/The-Landlords-Daughter-Rapscallion-05.webp', text: 'Detalle 5' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-01.jpg',
        text: 'DIRE STRAIGHTS',
        link: 'go:35',
        genre: 'Femboy, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Dire-Straights-Yaoi-09.jpg', text: 'Detalle 9' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk01.jpg',
        text: 'I NEED SOME MILK',
        link: 'go:34',
        genre: 'Hentai, Furry, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/03/INeedSomeMilk28.jpg', text: 'Detalle 28' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-01.jpg',
        text: 'CHERRY ROAD 4',
        link: 'go:33',
        genre: 'Zombie, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Cherry-Road-4-Un-Zombie-Llama-a-la-Puerta-26.jpg', text: 'Detalle 26' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-1.jpg',
        text: 'CREMA DE ALICIA',
        link: 'go:32',
        genre: 'Hentai, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/Crema-de-Alicia-Hentai-16.jpg', text: 'Detalle 16' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-01.webp',
        text: 'SUMMER SMITH XXX',
        link: 'go:31',
        genre: 'Ricky y morty, incesto, Cartoon,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-01.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-02.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-03.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-04.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-05.webp', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-06.webp', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-07.webp', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-08.webp', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-09.webp', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-10.webp', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-11.webp', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-12.webp', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Summer-Smith-XXX-Madmark-13.webp', text: 'Detalle 13' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/06/Connie-Universe-A-New-Opportunity-2-SuaviCream-01.webp',
        text: 'CONNIE’S UNIVERSE: A NEW OPPORTUNITY 2',
        link: 'go:30',
        genre: 'Steven universe, Cartoon, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/06/Connie-Universe-A-New-Opportunity-2-SuaviCream-01.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/06/Connie-Universe-A-New-Opportunity-2-SuaviCream-02.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/06/Connie-Universe-A-New-Opportunity-2-SuaviCream-03.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/06/Connie-Universe-A-New-Opportunity-2-SuaviCream-04.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/06/Connie-Universe-A-New-Opportunity-2-SuaviCream-05.webp', text: 'Detalle 5' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-1.jpg',
        text: 'ELEGANT SEX',
        link: 'go:29',
        genre: 'Spy × Family, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/Elegant-Sex-Ginhaha-12.jpg', text: 'Detalle 12' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-01.jpg',
        text: 'LUNA LOUD',
        link: 'go:28',
        genre: 'The loud house, Cartoon,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Luna-Loud-Mangamaster-10.jpg', text: 'Detalle 10' }
        ]
      },

{
        src: 'https://i.ibb.co/Gvn85M5G/IMG-20250212-120136.png',
        text: 'EL ABUELO Y YO',
        link: 'go:27',
        genre: 'Los Simpson, Disney, Cartoon,',
        gallery: [
          { src: 'https://i.ibb.co/Gvn85M5G/IMG-20250212-120136.png', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-33.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-34.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-35.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-36.jpg', text: 'Detalle 36' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-37.jpg', text: 'Detalle 37' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-38.jpg', text: 'Detalle 38' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-39.jpg', text: 'Detalle 39' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-40.jpg', text: 'Detalle 40' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-41.jpg', text: 'Detalle 41' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-42.jpg', text: 'Detalle 42' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-43.jpg', text: 'Detalle 43' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-44.jpg', text: 'Detalle 44' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-45.jpg', text: 'Detalle 45' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-46.jpg', text: 'Detalle 46' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-47.jpg', text: 'Detalle 47' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-48.jpg', text: 'Detalle 48' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-49.jpg', text: 'Detalle 49' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-50.jpg', text: 'Detalle 50' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-51.jpg', text: 'Detalle 51' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-52.jpg', text: 'Detalle 52' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-53.jpg', text: 'Detalle 53' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-54.jpg', text: 'Detalle 54' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-55.jpg', text: 'Detalle 55' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-56.jpg', text: 'Detalle 56' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-57.jpg', text: 'Detalle 57' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-58.jpg', text: 'Detalle 58' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-y-Yo-Los-Simpsons-59.jpg', text: 'Detalle 59' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-60.jpg', text: 'Detalle 60' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-61.jpg', text: 'Detalle 61' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-62.jpg', text: 'Detalle 62' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-63.jpg', text: 'Detalle 63' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-64.jpg', text: 'Detalle 64' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-65.jpg', text: 'Detalle 65' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-66.jpg', text: 'Detalle 66' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-67.jpg', text: 'Detalle 67' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-68.jpg', text: 'Detalle 68' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-69.jpg', text: 'Detalle 69' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-70.jpg', text: 'Detalle 70' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-71.jpg', text: 'Detalle 71' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-72.jpg', text: 'Detalle 72' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-73.jpg', text: 'Detalle 73' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-74.jpg', text: 'Detalle 74' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-75.jpg', text: 'Detalle 75' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-76.jpg', text: 'Detalle 76' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-77.jpg', text: 'Detalle 77' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-78.jpg', text: 'Detalle 78' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-79.jpg', text: 'Detalle 79' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-80.jpg', text: 'Detalle 80' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-81.jpg', text: 'Detalle 81' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-82.jpg', text: 'Detalle 82' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-83.jpg', text: 'Detalle 83' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-84.jpg', text: 'Detalle 84' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-85.jpg', text: 'Detalle 85' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-86.jpg', text: 'Detalle 86' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-87.jpg', text: 'Detalle 87' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-88.jpg', text: 'Detalle 88' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-89.jpg', text: 'Detalle 89' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-90.jpg', text: 'Detalle 90' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-91.jpg', text: 'Detalle 91' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-92.jpg', text: 'Detalle 92' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-93.jpg', text: 'Detalle 93' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-94.jpg', text: 'Detalle 94' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-95.jpg', text: 'Detalle 95' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-96.jpg', text: 'Detalle 96' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-97.jpg', text: 'Detalle 97' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-98.jpg', text: 'Detalle 98' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-99.jpg', text: 'Detalle 99' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-100.jpg', text: 'Detalle 100' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-101.jpg', text: 'Detalle 101' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-102.jpg', text: 'Detalle 102' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-103.jpg', text: 'Detalle 103' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-104.jpg', text: 'Detalle 104' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-105.gif', text: 'Detalle 105' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-106.jpg', text: 'Detalle 106' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-107.jpg', text: 'Detalle 107' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-108.jpg', text: 'Detalle 108' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-109.jpg', text: 'Detalle 109' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-110.jpg', text: 'Detalle 110' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-111.jpg', text: 'Detalle 111' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-112.jpg', text: 'Detalle 112' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-113.jpg', text: 'Detalle 113' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-114.jpg', text: 'Detalle 114' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-115.jpg', text: 'Detalle 115' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-116.jpg', text: 'Detalle 116' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-117.jpg', text: 'Detalle 117' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-118.jpg', text: 'Detalle 118' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-119.gif', text: 'Detalle 119' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-120.gif', text: 'Detalle 120' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-121.jpg', text: 'Detalle 121' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-122.jpg', text: 'Detalle 122' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/El-Abuelo-Y-Yo-Los-Simpsons-123.jpg', text: 'Detalle 123' }
        ]
      },

     {
        src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-1.jpg',
        text: 'HIDDEN GEMS',
        link: 'go:26',
        genre: 'Lesbianas, El dorado, Cartoon,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-2-1086x1536.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-3-1086x1536.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-4-1086x1536.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-5-1086x1536.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-6-1086x1536.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-7-1086x1536.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-8-1086x1536.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-9-1086x1536.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-10-1086x1536.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Hidden-Gems-Tovio-Rogers-13.jpg', text: 'Detalle 13' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-01.webp',
        text: 'MINA ASHIDO X SPIDER MAN ONIRICO',
        link: 'go:25',
        genre: 'spider-man, hentai',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-01.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-02.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-03.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-04.webp', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-05.webp', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-06.webp', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-07.webp', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-08.webp', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-09.webp', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-10.webp', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-11.webp', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-12.webp', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-13.webp', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-14.webp', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-15.webp', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-16.webp', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-17.webp', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-18.webp', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-19.webp', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-20.webp', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Mina-Ashido-x-Spider-Man-Onirico-21.webp', text: 'Detalle 22' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-01.jpg',
        text: 'THE REASON SHE TURNED FROM A MOTHER TO A PERVERTED MOTHER',
        link: 'go:24',
        genre: 'Milf, hentai, Tetonas',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-01.jpg', text: 'Detalle 1' },
{ src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-02.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-33.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-34.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-35.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-36.jpg', text: 'Detalle 36' }, { src:'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-37.jpg', text: 'Detalle 37' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-38.jpg', text: 'Detalle 38' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-39.jpg', text: 'Detalle 39' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-40.jpg', text: 'Detalle 40' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-41.jpg', text: 'Detalle 41' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-42.jpg', text: 'Detalle 42' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-43.jpg', text: 'Detalle 43' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-44.jpg', text: 'Detalle 44' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-45.jpg', text: 'Detalle 45' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-46.jpg', text: 'Detalle 46' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-1.jpg',
        text: 'UZAKI CHAN WA SUKEBE SHITAI',
        link: 'go:23',
        genre: 'Anal, Culonas, Tetonas',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-2.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-3.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-4.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-5.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-6.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-7.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-8.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-9.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-10.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-11.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-12.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-13.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-14.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-15.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-16.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-17.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-18.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-19.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-20.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-21.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Uzaki-Chan-wa-Sukebe-Shitai-22.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/05/Sex-Shimasu-Hentai-1-464x626.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Zutto-01-464x626.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Perverted-Mother-01-464x626.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/La-Dulzura-de-lo-Prohibido-01-464x626.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Ero-Ninja-%E2%80%93-Capitulo-2-01-464x626.jpg', text: 'Detalle 28' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-1.jpg',
        text: 'GOTH FEMBOY',
        link: 'go:22',
        genre: 'Femboy,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-16-scaled.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-18.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-19.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-20.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-21.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-22.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-23.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-24.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Goth-Femboy-Shadbase-25.jpg', text: 'Detalle 24' }
        ]
      },

{
        src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/1.jpg',
        text: 'SEIFUKU SHOUNEN 1',
        link: 'go:21',
        genre: 'Femboy, ',
        gallery: [
          { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/1.jpg', text: 'Detalle 1' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/2.jpg', text: 'Detalle 2' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/3.jpg', text: 'Detalle 3' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/4.jpg', text: 'Detalle 4' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/5.jpg', text: 'Detalle 5' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/6.jpg', text: 'Detalle 6' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/7.jpg', text: 'Detalle 7' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/8.jpg', text: 'Detalle 8' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/9.jpg', text: 'Detalle 9' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/10.jpg', text: 'Detalle 10' }, { src: 'https://images-sites.hhpanel.org/images/chochox/0b9eea7f9887d3629c84547a68765d82/1/11.jpg', text: 'Detalle 11' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-01-1.jpg',
        text: 'CHERRY ROAD 3',
        link: 'go:20',
        genre: 'Zombie',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-01-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-3-Zombie-33.jpg', text: 'Detalle 33' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-01.jpg',
        text: 'CHERRY ROAD 2',
        link: 'go:19',
        genre: 'Zombie, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2021/11/Cherry-Road-2-Mi-vida-con-una-Zombie-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2023/05/My-Neighbor-Widow-4-RoseBlue3D-Comic-Porno-01-464x626.jpeg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/07/La-Pasion-2-Steven-Universe-1-464x626.jpg', text: 'Detalle 23' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-1.jpg',
        text: 'RANGIKU & YORUICHI’S HOTTEST SLEEPOVER',
        link: 'go:18',
        genre: 'Hentai, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/12/Rangiku-y-Yoruichis-Hottest-Sleepover-NowaJoestar-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/11/creditos.jpg', text: 'Detalle 12' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-01.jpg',
        text: 'MY FAIRY MILF 1',
        link: 'go:17',
        genre: 'Milf, Incesto, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/06/My-Fairy-Milf-1-Wayo-27.jpg', text: 'Detalle 27' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-1.jpg',
        text: 'MY FAIRY MILF 2',
        link: 'go:16',
        genre: 'Milf, Incesto, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-29-scaled.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-30-scaled.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-31-scaled.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2022/08/My-Fairy-Milf-2-Wayo-32-scaled.jpg', text: 'Detalle 32' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-01.webp',
        text: 'MAGIC IN THE AIR',
        link: 'go:15',
        genre: 'Furry, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-01.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-02.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-03.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-04.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-05.webp', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-06.webp', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-07.webp', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-08.webp', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-09.webp', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-10.webp', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-11.webp', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-12.webp', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-13.webp', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-14.webp', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-15.webp', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-16.webp', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-17.webp', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-18.webp', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-19.webp', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-20.webp', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-21.webp', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-22.webp', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-23.webp', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-24.webp', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-25.webp', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-26.webp', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-27.webp', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-28.webp', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-29.webp', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-30.webp', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-31.webp', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-32.webp', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2024/07/Magic-in-the-Air-Cooliehigh-Comic-Porno-33.webp', text: 'Detalle 33' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-1.jpg',
        text: 'ROXY AFTER DARK 1',
        link: 'go:14',
        genre: 'Furry, fnaf, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-33.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-34.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-35.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-36.jpg', text: 'Detalle 36' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-37.jpg', text: 'Detalle 37' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-38.jpg', text: 'Detalle 38' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-39.jpg', text: 'Detalle 39' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-40.jpg', text: 'Detalle 40' }, { src: 'https://reycomix.com/wp-content/uploads/2024/11/Roxy-After-Dark-1-Cubed-Coconut-41.jpg', text: 'Detalle 41' }
        ]
      },


{
        src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-01.jpg',
        text: 'SNAP MY CHOKER',
        link: 'go:13',
        genre: 'Femboy, Incesto',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2021/12/Snap-My-Choker-11.jpg', text: 'Detalle 11' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-01.webp',
        text: 'THE SHANTY OF BOOTY AND SEA-MEN',
        link: 'go:12',
        genre: 'El Show de Cuphead, Cartoon, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-01.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-02.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-03.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-04.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-05.webp', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-06.webp', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-07.webp', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-08.webp', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-09.webp', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-10.webp', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-11.webp', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-12.webp', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-13.webp', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-14.webp', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-15.webp', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-16.webp', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-17.webp', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-18.webp', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-19.webp', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-20.webp', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-21.webp', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-22.webp', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-23.webp', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-24.webp', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-25.webp', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-26.webp', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-27.webp', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-28.webp', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-29.webp', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/The-Shanty-of-Booty-and-Sea-men-Macergo-30.webp', text: 'Detalle 30' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-1.jpg',
        text: 'KOMI SAN WA H MOUSOUSHOU DESU 1',
        link: 'go:11',
        genre: 'Hentai,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-1-Wox-Yang-29.jpg', text: 'Detalle 29' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-1.jpg',
        text: 'KOMI SAN WA H MOUSOUSHOU DESU 2',
        link: 'go:10',
        genre: 'Hentai,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2024/12/Komi-San-Wa-h-Mousoushou-desu-2-Wox-Yang-28.jpg', text: 'Detalle 28' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-01.jpg',
        text: 'WANTON WIDOW 1',
        link: 'go:9',
        genre: 'Incesto, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Wanton-Widow-12.jpg', text: 'Detalle 12' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-1.jpg',
        text: 'FAMILY VALUES 8',
        link: 'go:8',
        genre: 'Hentai, Incesto, Lesbianas, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2025/02/Family-Values-8-Sleepygimp-20.jpg', text: 'Detalle 20' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-01.jpg',
        text: 'THE PLOT DRAKKENS – KIM POSSIBLE',
        link: 'go:7',
        genre: 'Disney, Kim Possible, Cartoon,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/04/The-Plot-Drakkens-06.jpg', text: 'Detalle 6' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-1.jpg',
        text: 'SEE YA LATER BOI 2',
        link: 'go:6',
        genre: 'Femboy, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-33.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-34.jpg', text: 'Detalle 34' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-35.jpg', text: 'Detalle 35' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-36.jpg', text: 'Detalle 36' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-37.jpg', text: 'Detalle 37' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-38.jpg', text: 'Detalle 38' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-39.jpg', text: 'Detalle 39' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-40.jpg', text: 'Detalle 40' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-41.jpg', text: 'Detalle 41' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-42.jpg', text: 'Detalle 42' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-43.jpg', text: 'Detalle 43' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-44.jpg', text: 'Detalle 44' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-45.jpg', text: 'Detalle 45' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-46.jpg', text: 'Detalle 46' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-47.jpg', text: 'Detalle 47' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-48.jpg', text: 'Detalle 48' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-49.jpg', text: 'Detalle 49' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-50.jpg', text: 'Detalle 50' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-51.jpg', text: 'Detalle 51' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-52.jpg', text: 'Detalle 52' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-53.jpg', text: 'Detalle 53' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-54.jpg', text: 'Detalle 54' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-55.jpg', text: 'Detalle 55' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-56.jpg', text: 'Detalle 56' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-57.jpg', text: 'Detalle 57' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-58.jpg', text: 'Detalle 58' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-59.jpg', text: 'Detalle 59' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-60.jpg', text: 'Detalle 60' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-61.jpg', text: 'Detalle 61' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-62.jpg', text: 'Detalle 62' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-63.jpg', text: 'Detalle 63' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-64.jpg', text: 'Detalle 64' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-65.jpg', text: 'Detalle 65' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-66.jpg', text: 'Detalle 66' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-67.jpg', text: 'Detalle 67' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-68.jpg', text: 'Detalle 68' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-69.jpg', text: 'Detalle 69' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-70.jpg', text: 'Detalle 70' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-71.jpg', text: 'Detalle 71' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-72.jpg', text: 'Detalle 72' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-73.jpg', text: 'Detalle 73' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-74.jpg', text: 'Detalle 74' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-75.jpg', text: 'Detalle 75' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-76.jpg', text: 'Detalle 76' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-77.jpg', text: 'Detalle 77' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-78.jpg', text: 'Detalle 78' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-79.jpg', text: 'Detalle 79' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-80.jpg', text: 'Detalle 80' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-81.jpg', text: 'Detalle 81' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-82.jpg', text: 'Detalle 82' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-83.jpg', text: 'Detalle 83' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-84.jpg', text: 'Detalle 84' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-85.jpg', text: 'Detalle 85' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-86.jpg', text: 'Detalle 86' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-87.jpg', text: 'Detalle 87' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-2-Dross-88.jpg', text: 'Detalle 88' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-1.webp',
        text: 'STAR VS. THE FORCES OF SEX 5',
        link: 'go:5',
        genre: 'Star butterfly, Disney, Cartoon, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-1.webp', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-2.webp', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-3.webp', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-4.webp', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-5.webp', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-6.webp', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-7.webp', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-8.webp', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-9.webp', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-10.webp', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-11.webp', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-12.webp', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-13.webp', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-14.webp', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-15.webp', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-16.webp', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/Star-vs.-The-Forces-of-Sex-5-Booth-Buddies-17.webp', text: 'Detalle 17' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-1-scaled.jpg',
        text: 'LOS SIMPSONS: PARAISO',
        link: 'go:4',
        genre: 'Incesto, Los Simpson, Disney,',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-1-scaled.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-2-scaled.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-3-scaled.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-4-scaled.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-5-scaled.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-6-scaled.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-7-scaled.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-8-scaled.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-9-scaled.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-10-scaled.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-11-scaled.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-12-scaled.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-13-scaled.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-14-scaled.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-15-scaled.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-16-scaled.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-17-scaled.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-18-scaled.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-19-scaled.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-20-scaled.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-21-scaled.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-22-scaled.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-23-scaled.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-24-scaled.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-25-scaled.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/09/Los-Simpsons-Parais-ReyComiX-26-scaled.jpg', text: 'Detalle 26' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-1.jpg',
        text: 'SEE YA LATER BOI 1',
        link: 'go:3',
        genre: 'Femboy, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-1.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-2.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-3.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-4.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-5.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-6.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-7.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-8.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-9.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-27.jpg', text: 'Detalle 27' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-28.jpg', text: 'Detalle 28' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-29.jpg', text: 'Detalle 29' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-30.jpg', text: 'Detalle 30' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-31.jpg', text: 'Detalle 31' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-32.jpg', text: 'Detalle 32' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-33.jpg', text: 'Detalle 33' }, { src: 'https://reycomix.com/wp-content/uploads/2025/01/See-Ya-Later-Boi-1-Dross-34.jpg', text: 'Detalle 34' }
        ]
      },

{
        src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-01.jpg',
        text: 'CHERRY ROAD 1',
        link: 'go:2',
        genre: 'Zombie, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-01.jpg', text: 'Detalle 1' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-02.jpg', text: 'Detalle 2' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-03.jpg', text: 'Detalle 3' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-04.jpg', text: 'Detalle 4' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-05.jpg', text: 'Detalle 5' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-06.jpg', text: 'Detalle 6' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-07.jpg', text: 'Detalle 7' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-08.jpg', text: 'Detalle 8' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-09.jpg', text: 'Detalle 9' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-10.jpg', text: 'Detalle 10' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-11.jpg', text: 'Detalle 11' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-12.jpg', text: 'Detalle 12' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-13.jpg', text: 'Detalle 13' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-14.jpg', text: 'Detalle 14' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-15.jpg', text: 'Detalle 15' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-16.jpg', text: 'Detalle 16' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-17.jpg', text: 'Detalle 17' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-18.jpg', text: 'Detalle 18' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-19.jpg', text: 'Detalle 19' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-20.jpg', text: 'Detalle 20' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-21.jpg', text: 'Detalle 21' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-22.jpg', text: 'Detalle 22' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-23.jpg', text: 'Detalle 23' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-24.jpg', text: 'Detalle 24' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-25.jpg', text: 'Detalle 25' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-26.jpg', text: 'Detalle 26' }, { src: 'https://reycomix.com/wp-content/uploads/2022/02/Cherry-Road-27.jpg', text: 'Detalle 27' }
        ]
      },

      {
        src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-01.webp',
        text: 'LA NOCHE ESPECIAL DE TRPG DE MARCY',
        link: 'go:1',
        genre: 'Amphibia, Lesbianas, Disney, ',
        gallery: [
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-01.webp', text: 'Detalle 1' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-02.webp', text: 'Detalle 2' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-03.webp', text: 'Detalle 3' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-04.webp', text: 'Detalle 4' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-05.webp', text: 'Detalle 5' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-06.webp', text: 'Detalle 6' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-07.webp', text: 'Detalle 7' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-08.webp', text: 'Detalle 8' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-09.webp', text: 'Detalle 9' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-10.webp', text: 'Detalle 10' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-11.webp', text: 'Detalle 11' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-12.webp', text: 'Detalle 12' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-13.webp', text: 'Detalle 13' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-14.webp', text: 'Detalle 14' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-15.webp', text: 'Detalle 15' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-16.webp', text: 'Detalle 16' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-17.webp', text: 'Detalle 17' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-18.webp', text: 'Detalle 18' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-19.webp', text: 'Detalle 19' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-20.webp', text: 'Detalle 20' },
          { src: 'https://reycomix.com/wp-content/uploads/2025/02/La-Noche-Especial-de-TRPG-de-Marcy-Yumail-21.webp', text: 'Detalle 21' }
        ]
      }
      // Puedes agregar más objetos de imagen aquí.
    ];
const itemsPerPage = 14;
let currentPage = 1;
let filteredImages = images;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let showingLastAdded = false;
let originalImagesOrder = [];

// Variables para el zoom en el detail
let originalDetailZoomWidth, originalDetailZoomHeight;

// Función auxiliar para obtener líneas envueltas
function getWrappedLines(context, text, maxWidth) {
  const words = text.split(' ');
  let line = '';
  const lines = [];
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    if (context.measureText(testLine).width > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);
  return lines;
}

function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function openDetail(item) {
  document.getElementById('detailTitle').textContent = item.text;
  const detailGallery = document.getElementById('detailGallery');
  detailGallery.innerHTML = '';
  if (item.gallery && item.gallery.length > 0) {
    item.gallery.forEach(galleryItem => {
      const imgEl = document.createElement('img');
      imgEl.src = galleryItem.src;
      imgEl.alt = galleryItem.text || item.text;
      detailGallery.appendChild(imgEl);
    });
  } else {
    const imgEl = document.createElement('img');
    imgEl.src = item.src;
    imgEl.alt = item.text;
    detailGallery.appendChild(imgEl);
  }
  detailScale = 1;
  const detailZoomContainer = document.getElementById('detailZoomContainer');
  originalDetailZoomWidth = detailZoomContainer.clientWidth;
  originalDetailZoomHeight = detailZoomContainer.clientHeight;
  updateDetailScale();
  document.getElementById('detailModal').style.display = 'flex';
}

function closeDetail() {
  document.getElementById('detailModal').style.display = 'none';
}

function toggleFavorite(image, favoriteImg) {
  const index = favorites.indexOf(image.src);
  if (index !== -1) {
    favorites.splice(index, 1);
    favoriteImg.src = 'https://i.ibb.co/Xrfp7rbN/corazon1.png';
  } else {
    favorites.push(image.src);
    favoriteImg.src = 'https://i.ibb.co/5xtRM3Sd/corazon.png';
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredImages.slice(start, end);
  currentItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    const clickableArea = document.createElement('div');
    clickableArea.style.cursor = 'pointer';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.text;
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    const p = document.createElement('p');
    p.textContent = item.text;
    overlay.appendChild(p);
    clickableArea.appendChild(img);
    clickableArea.appendChild(overlay);
    clickableArea.addEventListener('click', event => {
      event.preventDefault();
      openDetail(item);
    });
    const favoriteIcon = document.createElement('div');
    favoriteIcon.classList.add('favorite-icon');
    const favoriteImg = document.createElement('img');
    favoriteImg.src = favorites.includes(item.src)
      ? 'https://i.ibb.co/5xtRM3Sd/corazon.png'
      : 'https://i.ibb.co/Xrfp7rbN/corazon1.png';
    favoriteImg.alt = 'Añadir a favoritos';
    favoriteIcon.appendChild(favoriteImg);
    favoriteIcon.addEventListener('click', event => {
      event.stopPropagation();
      event.preventDefault();
      toggleFavorite(item, favoriteImg);
    });
    galleryItem.appendChild(clickableArea);
    galleryItem.appendChild(favoriteIcon);
    gallery.appendChild(galleryItem);
  });
  if (showingLastAdded) {
    document.getElementById('prevButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('pageNumber').textContent = '';
  } else {
    document.getElementById('prevButton').style.display = 'block';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('pageNumber').textContent = currentPage;
  }
  document.getElementById('prevButton').disabled = showingLastAdded || currentPage === 1;
  document.getElementById('nextButton').disabled = showingLastAdded || end >= filteredImages.length;
}

function nextPage() {
  currentPage++;
  renderGallery();
  window.scrollTo(0, 0);
}

function prevPage() {
  currentPage--;
  renderGallery();
  window.scrollTo(0, 0);
}

function showAll() {
  filteredImages = originalImagesOrder;
  currentPage = 1;
  showingLastAdded = false;
  renderGallery();
}

function showFavorites() {
  filteredImages = images.filter(image => favorites.includes(image.src));
  currentPage = 1;
  showingLastAdded = false;
  renderGallery();
}

function showLastAdded() {
  const sortedImages = [...images].sort((a, b) => {
    const aNum = parseInt(a.link.match(/\d+/)[0]);
    const bNum = parseInt(b.link.match(/\d+/)[0]);
    return bNum - aNum;
  });
  filteredImages = sortedImages.slice(0, 10);
  currentPage = 1;
  showingLastAdded = true;
  renderGallery();
}

function setColumns(numColumns) {
  localStorage.setItem('galleryColumns', numColumns);
  updateGalleryColumns();
}

function updateGalleryColumns() {
  const numColumns = localStorage.getItem('galleryColumns') || 2;
  document.getElementById('gallery').style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
}

function loadBackgroundImage() {
  const bg = localStorage.getItem('backgroundImage');
  if (bg) {
    document.body.style.backgroundImage = "url('" + bg + "')";
  }
}

/* ================== FUNCIONALIDAD DEL ZOOM ================== */
let detailScale = 1;
function updateDetailScale() {
  const zoomContainer = document.getElementById('detailZoomContainer');
  zoomContainer.style.transform = `scale(${detailScale})`;
  if (originalDetailZoomWidth && originalDetailZoomHeight) {
    zoomContainer.style.width = (originalDetailZoomWidth * detailScale) + "px";
    zoomContainer.style.height = (originalDetailZoomHeight * detailScale) + "px";
  }
}

/* ================== FUNCIONALIDAD DEL MODAL DE MENSAJE ================== */
function uploadMessageImage(base64Image) {
  const formData = new FormData();
  formData.append("image", base64Image);
  fetch("https://api.imgbb.com/1/upload?key=12df5d4e7cfaa2ebabf779537f6c652a", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('messageModal').style.display = 'none';
      document.getElementById('messageForm').reset();
      document.getElementById('messageSent').textContent = "💬 Gracias por tu mensaje";
      document.getElementById('messageSent').style.display = 'block';
      setTimeout(() => {
        document.getElementById('messageSent').style.display = 'none';
      }, 3000);
    } else {
      alert("Error al enviar el mensaje: " + data.error.message);
    }
  })
  .catch(err => {
    console.error(err);
    alert("Error al enviar el mensaje.");
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateGalleryColumns();
  applySavedTheme();
  loadBackgroundImage();
  
  const storedExcludeTags = localStorage.getItem('excludeTags');
  if (storedExcludeTags !== null) {
    document.getElementById('excludeTags').value = storedExcludeTags;
  }
  
  originalImagesOrder = shuffleArray(images);
  filterImages();
  
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  
  document.getElementById('search-icon').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
  });
  
  document.getElementById('searchInput').addEventListener('input', filterImages);
  
  document.getElementById('excludeTags').addEventListener('input', function() {
    localStorage.setItem('excludeTags', this.value);
    filterImages();
  });
  
  document.getElementById('menu-icon').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    sideMenu.classList.toggle('show');
    menuOverlay.classList.toggle('show');
  });
  
  document.getElementById('closeMenuIcon').addEventListener('click', function(){
    document.getElementById('sideMenu').classList.remove('show');
    document.getElementById('menuOverlay').classList.remove('show');
  });
  
  document.getElementById('menuOverlay').addEventListener('click', function(){
    document.getElementById('sideMenu').classList.remove('show');
    document.getElementById('menuOverlay').classList.remove('show');
  });
  
  document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', function(){
      document.querySelectorAll('.side-menu a').forEach(el => el.classList.remove('active-section'));
      this.classList.add('active-section');
      document.getElementById('sideMenu').classList.remove('show');
      document.getElementById('menuOverlay').classList.remove('show');
    });
  });
  
  document.getElementById('uploadBackgroundOption').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('backgroundUploader').click();
  });
  
  document.getElementById('backgroundUploader').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      const file = this.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        localStorage.setItem('backgroundImage', dataUrl);
        loadBackgroundImage();
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById('zoom-in').addEventListener('click', function() {
    const scrollContainer = document.getElementById('detailScrollContainer');
    const oldScale = detailScale;
    const containerCenterX = scrollContainer.clientWidth / 2;
    const containerCenterY = scrollContainer.clientHeight / 2;
    const contentCenterX = scrollContainer.scrollLeft + containerCenterX;
    const contentCenterY = scrollContainer.scrollTop + containerCenterY;
    detailScale += 0.1;
    updateDetailScale();
    const newContentCenterX = contentCenterX * (detailScale / oldScale);
    const newContentCenterY = contentCenterY * (detailScale / oldScale);
    scrollContainer.scrollLeft = newContentCenterX - containerCenterX;
    scrollContainer.scrollTop = newContentCenterY - containerCenterY;
  });
  
  document.getElementById('zoom-out').addEventListener('click', function() {
    const scrollContainer = document.getElementById('detailScrollContainer');
    const oldScale = detailScale;
    const containerCenterX = scrollContainer.clientWidth / 2;
    const containerCenterY = scrollContainer.clientHeight / 2;
    const contentCenterX = scrollContainer.scrollLeft + containerCenterX;
    const contentCenterY = scrollContainer.scrollTop + containerCenterY;
    detailScale = Math.max(1, detailScale - 0.1);
    updateDetailScale();
    const newContentCenterX = contentCenterX * (detailScale / oldScale);
    const newContentCenterY = contentCenterY * (detailScale / oldScale);
    scrollContainer.scrollLeft = newContentCenterX - containerCenterX;
    scrollContainer.scrollTop = newContentCenterY - containerCenterY;
  });
  
  /* ================== MODAL DE MENSAJE ================== */
  document.getElementById('sendMessageOption').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('messageModal').style.display = 'block';
  });
  
  document.getElementById('messageModalClose').addEventListener('click', function() {
    document.getElementById('messageModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    const messageModal = document.getElementById('messageModal');
    if (event.target == messageModal) {
      messageModal.style.display = 'none';
    }
  });
  
  // Evento para el botón "Adjuntar Imagen"
  document.getElementById('selectImageButton').addEventListener('click', function() {
    document.getElementById('messageImageInput').click();
  });
  
  // Al enviar el formulario se genera un canvas que contiene el mensaje y, opcionalmente, la imagen adjunta.
  document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('messageName').value;
    const message = document.getElementById('messageContent').value;
    const textToWrap = message + "";
    
    // Crear canvas para el texto con ancho fijo y altura dinámica según el texto
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 600;
    const ctx = textCanvas.getContext('2d');
    ctx.font = "24px Arial";
    const maxWidth = 560;
    const lineHeight = 30;
    const headerHeight = 150;
    const lines = getWrappedLines(ctx, textToWrap, maxWidth);
    const requiredHeight = headerHeight + lines.length * lineHeight + 20;
    textCanvas.height = requiredHeight;
    
    const ctx2 = textCanvas.getContext('2d');
    ctx2.font = "24px Arial";
    ctx2.fillStyle = "#ffffff";
    ctx2.fillRect(0, 0, textCanvas.width, textCanvas.height);
    ctx2.fillStyle = "#000000";
    ctx2.fillText("ᴍᴇɴsᴀᴊᴇ ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ 🖊️", 20, 50);
    ctx2.fillText(name, 20, 100);
    for (let i = 0; i < lines.length; i++) {
      ctx2.fillText(lines[i], 20, headerHeight + i * lineHeight);
    }
    
    function continueWithCanvas(finalCanvas) {
      const dataURL = finalCanvas.toDataURL('image/png');
      const base64Image = dataURL.replace(/^data:image\/png;base64,/, "");
      uploadMessageImage(base64Image);
    }
    
    const imageInput = document.getElementById('messageImageInput');
    if (imageInput.files && imageInput.files[0]) {
      const file = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageDataUrl = event.target.result;
        const img = new Image();
        img.onload = function() {
          const scale = textCanvas.width / img.width;
          const scaledWidth = textCanvas.width;
          const scaledHeight = img.height * scale;
          const finalCanvas = document.createElement('canvas');
          finalCanvas.width = textCanvas.width;
          finalCanvas.height = textCanvas.height + scaledHeight;
          const finalCtx = finalCanvas.getContext('2d');
          finalCtx.drawImage(textCanvas, 0, 0);
          finalCtx.drawImage(img, 0, textCanvas.height, scaledWidth, scaledHeight);
          continueWithCanvas(finalCanvas);
        }
        img.src = imageDataUrl;
      }
      reader.readAsDataURL(file);
    } else {
      continueWithCanvas(textCanvas);
    }
  });
});
