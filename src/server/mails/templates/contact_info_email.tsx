


import { IContactInfo } from '..'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

export function ContactInfoEmail({ name, message, phoneNumber, email }: IContactInfo) {
  const previewText = `Solicitud de consulta ${name}, ${phoneNumber}.`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] bg-black rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://www.xamicalli.com/logo.png"
                width="80"
                height="80"
                alt="Xamicalli"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <Text className="text-[#ff7b00]" >{name}</Text>
            </Heading>
            <Text className="text-white text-[14px] leading-[24px]">
              <strong className="text-[#ff7b00]" >Número de contacto: </strong> {phoneNumber}
            </Text>
            <Text className="text-white text-[14px] leading-[24px]">
              <strong className="text-[#ff7b00]" >Email: </strong> {email}
            </Text>
            <Text className="text-white text-[14px] leading-[24px]">
              <strong className="text-[#ff7b00]" >Mensaje: </strong>
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>



  )
}

