document.querySelectorAll('.size_button').forEach(button => {
  button.addEventListener('click', function() {
    const size = button.getAttribute('data-size');
    const originalPrice = parseInt(button.getAttribute('data-price')); // قیمت اصلی محصول برای این سایز
    const discountPercent = 8;
     // بررسی اینکه آیا originalPrice به درستی خوانده شده است
     if (isNaN(originalPrice)) {
      return; // اگر قیمت معتبر نیست، کد را متوقف کن
    }


    // محاسبه تخفیف
    const discountAmount = (originalPrice * discountPercent) / 100;
    const newPrice = originalPrice - discountAmount;

    // نمایش قیمت جدید برای سایز انتخاب‌شده
    const priceAfter = document.querySelector('.price_after');
    const priceBefore = document.querySelector('.price_before');

    priceBefore.textContent = `${originalPrice.toLocaleString()} `; // قیمت اصلی
    priceAfter.textContent = `${newPrice.toLocaleString()} تومان`; // قیمت تخفیف خورده

    // تغییر ظاهر دکمه انتخاب شده
    document.querySelectorAll('.size_button').forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});


document.querySelectorAll('.new-size_button').forEach(button => {
  button.addEventListener('click', function() {
    const size = button.getAttribute('data-size');
    const originalPrice = parseInt(button.getAttribute('data-price')); // قیمت اصلی محصول برای این سایز

    // بررسی اینکه آیا originalPrice به درستی خوانده شده است
    if (isNaN(originalPrice)) {
      return; // اگر قیمت معتبر نیست، کد را متوقف کن
    }

    const discountPercent = 8;

    // محاسبه تخفیف
    const discountAmount = (originalPrice * discountPercent) / 100;
    const newPrice = originalPrice - discountAmount;

    // نمایش قیمت جدید برای سایز انتخاب‌شده
    const priceAfter = document.querySelector('.new-price_after');
    const priceBefore = document.querySelector('.new-price_before');

    priceBefore.textContent = `${originalPrice.toLocaleString()} `; // قیمت اصلی
    priceAfter.textContent = `${newPrice.toLocaleString()} تومان`; // قیمت تخفیف خورده

    // تغییر ظاهر دکمه انتخاب شده
    document.querySelectorAll('.new-size_button').forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});
