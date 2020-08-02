from django import forms


# ContactForm with 3 fields: name, email, comment. We've made all three REQUIRED

# https://myaccount.google.com/lesssecureapps

"""
    Allows the account to take on less secure apps, this is the only way it seems gmail can be used to setup SMTP
    https://myaccount.google.com/lesssecureapps
    
"""

class ContactForm(forms.Form):
    name = forms.CharField(max_length=500, label="Name")
    email= forms.EmailField(max_length=500, label="Email")
    comment = forms.CharField(
        label='',
        widget=forms.Textarea(
            attrs={'placeholder': 'Enter your comment here'}
        )
    )