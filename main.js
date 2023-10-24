const user_detail = {
    "age": 23,
    "country": "Kenya",
    "id": 6,
    "email": "nnebuchi.osigbo@techbridge.city",
    "first_name": "Frank",
    "last_name": "Akorede",
    "middle_name": "",
    "dob": "1994-09-29",
    "phone": "08102516689",
    "profile_photo": "doctors_profile_photos/downloadjpeg_1696187542.jpeg",
    "email_verified_at": "2023-10-01 07:00:25",
    "phone_verified_at": "2023-10-01 20:11:24",
    "fcm_token": null,
    "remember_token": null,
    "status": "pending",
    "available": 1,
    "token": "63|K8HV0O4KXvvxzBnZSf8UavdfoF37mSzawnFuSyE3",
    "no_of_patients": 0,
    "hours_consulted": 5,
    "weeklyEarnings": "0.00",
    "wallet": {
        "balance": "0.00",
        "earnings": "0.00"
    },
    "specialization": {
        "id": 8,
        "name": "Psychologist",
        "title": "",
        "parent": "0"
    },
    "certifications": [
        {
            "id": 5,
            "doctor_id": 6,
            "institution": "University of Lagos",
            "cert_name": "MBBS",
            "cert_number": "UNILAG/2010/898394UTE",
            "cert_photo": "doctors_certifications/innopjpg_1696189672.jpg",
            "year_acquired": "2009-05-13",
            "slug": "MBBS-cBROO"
        },
        {
            "id": 6,
            "doctor_id": 6,
            "institution": "Freedom College",
            "cert_name": "Msc, Human Anatomy",
            "cert_number": "FRE-UK-89-2022",
            "cert_photo": "doctors_certifications/glosarrytablescreenshotpng_1696189760.png",
            "year_acquired": "2016-06-15",
            "slug": "Msc,-Human-Anatomy-R5u11"
        }
    ]
    
}

console.log(user_detail.wallet)
console.log(user_detail.wallet.balance)
console.log(user_detail.certifications)
console.log(user_detail.certifications[0]) //returns the first certification
console.log(user_detail.certifications[0].institution) // returns the institution of the first certification

