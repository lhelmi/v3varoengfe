export const formatRupiah = (angka) => {
    let temp = angka.toString();

    let isMinus = angka < 0 ? '-' : '';

    let number_string = temp.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    
    if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return `${isMinus}${rupiah}`;
}

export const rupiahToNumber = (value) => {
    if(!value) return 0;
    return parseInt(value.split(".").join(""));
}