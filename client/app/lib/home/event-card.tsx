import { CardFooter } from "react-bootstrap";
import logo from "../../../public/chem_logo_color.png";
import kfupm_logo from "../../../public/home/kfupm.svg";
import vector from "../../../public/home/event-card-vector.svg";
import "../../ui/home/event-card.css";
import calender from "../../../public/home/calendar 2.svg";
import time_svg from "../../../public/home/time.svg";
import location_svg from "../../../public/home/location.svg";
import { Card, CardHeader, CardBody } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  barcode?: string | null; // Optional prop for the barcode
}

export default function EventCard({
  title,
  date,
  time,
  location,
  barcode,
}: EventCardProps) {
  const [qrCode, setQrCode] = useState<string | null>(null);

  // Generate QR code when the barcode changes
  useEffect(() => {
    const generateQRCode = async () => {
      if (barcode) {
        try {
          const qrCodeData = await QRCode.toDataURL(barcode);
          setQrCode(qrCodeData);
        } catch (error) {
          console.error("Failed to generate QR code:", error);
        }
      }
    };

    generateQRCode();
  }, [barcode]);

  return (
    <Card className="event-card">
      <CardHeader className="p-0 flex justify-between align-content-center">
        <Image src={logo} height={200} width={200} alt="chem_logo" />
        <Image src={kfupm_logo} height={200} width={250} alt="kfupm_logo" />
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <h1 className="overflow-hidden text-center font-bold">{title}</h1>
        <Image src={vector} height={300} width={800} alt="vector" />
      </CardBody>
      <CardFooter className="flex mt-2 arc-footer">
        <div className="event-info flex align-content-center align-items-center justify-around w-100">
          <div className="left-section flex-col p-4">
            <div className="flex items-center m-2">
              <Image
                src={calender}
                alt="calender"
                height={21}
                width={21}
                className="mr-2"
              />
              <span className="text-white">{date}</span>
            </div>
            <div className="flex items-center m-2">
              <Image
                src={time_svg}
                alt="time"
                height={21}
                width={21}
                className="mr-2"
              />
              <span className="text-white">{time}</span>
            </div>
            <div className="flex items-center m-2">
              <Image
                src={location_svg}
                alt="location"
                height={21}
                width={21}
                className="mr-2"
              />
              <span className="text-white">{location}</span>
            </div>
          </div>
          <div className="right-section p-4 m-2">
            {qrCode && (
              <Image
                src={qrCode}
                alt="QR Code"
                height={100}
                width={100}
                className="rounded-barcode"
              />
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}