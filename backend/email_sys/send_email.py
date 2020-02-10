import os
import smtplib
import imghdr
import config
from email.message import EmailMessage

def send_email(receiver, subject, txtbody, htmlbody):
	EMAIL_ADDRESS = config.EMAIL_ADDRESS
	EMAIL_PASSWORD = config.PASSWORD

	msg = EmailMessage()
	msg['Subject'] = subject
	msg['From'] = EMAIL_ADDRESS
	msg['To'] = receiver

	msg.set_content(txtbody)

	msg.add_alternative(htmlbody, subtype='html')

	with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
	    smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
	    smtp.send_message(msg)

if __name__ == '__main__':
	receiver = config.EMAIL_ADDRESS
	subject = 'Test email subject'
	txtbody = 'This is a plain text email'
	htmlbody = """\
	<!DOCTYPE html>
	<html>
	    <body>
	        <h1 style="color:SlateGray;">This is an HTML Email!</h1>
	    </body>
	</html>
	"""
	send_email(receiver, subject, txtbody, htmlbody)