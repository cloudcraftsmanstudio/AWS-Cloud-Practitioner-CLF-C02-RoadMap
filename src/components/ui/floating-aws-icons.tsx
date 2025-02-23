import React from "react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { motion } from "framer-motion";

const awsIcons = [
  {
    name: "AWS Cloud",
    path: "/icons/AWS-Cloud-logo_32.svg",
  },
  {
    name: "EBS Volume",
    path: "/icons/Res_Amazon-Elastic-Block-Store_Volume_48.svg",
  },
  {
    name: "EFS File System",
    path: "/icons/Res_Amazon-Elastic-File-System_File-System_48.svg",
  },
  {
    name: "S3 Bucket",
    path: "/icons/Res_Amazon-Simple-Storage-Service_Bucket_48.svg",
  },
  {
    name: "Internet Gateway",
    path: "/icons/Res_Amazon-VPC_Internet-Gateway_48.svg",
  },
  {
    name: "NAT Gateway",
    path: "/icons/Res_Amazon-VPC_NAT-Gateway_48.svg",
  },
  {
    name: "Direct Connect Gateway",
    path: "/icons/Res_AWS-Direct-Connect_Gateway_48.svg",
  },
  {
    name: "Transit Gateway",
    path: "/icons/Res_AWS-Transit-Gateway_Attachment_48.svg",
  },
  {
    name: "Application Load Balancer",
    path: "/icons/Res_Elastic-Load-Balancing_Application-Load-Balancer_48.svg",
  },
  {
    name: "Network Load Balancer",
    path: "/icons/Res_Elastic-Load-Balancing_Network-Load-Balancer_48.svg",
  },
  {
    name: "Aurora Instance",
    path: "/icons/Res_Amazon-Aurora-Instance_48.svg",
  },
  {
    name: "RDS Instance",
    path: "/icons/Res_Amazon-Aurora_Amazon-RDS-Instance_48.svg",
  },
  {
    name: "EKS on Outposts",
    path: "/icons/Res_Amazon-Elastic-Kubernetes-Service_EKS-on-Outposts_48.svg",
  },
  {
    name: "Auto Scaling",
    path: "/icons/Res_Amazon-EC2_Auto-Scaling_48.svg",
  },
  {
    name: "EC2 Instances",
    path: "/icons/Res_Amazon-EC2_Instances_48.svg",
  },
  {
    name: "Lambda Function",
    path: "/icons/Res_AWS-Lambda_Lambda-Function_48.svg",
  }
];

const iconPositions = [
  { top: "45%", left: "50%", depth: 3 },
  { top: "5%", left: "20%", depth: 0.5 },
  { top: "17.5%", left: "32%", depth: 1 },
  { top: "12%", left: "53%", depth: 2 },
  { top: "10%", left: "83%", depth: 1 },
  { top: "50%", left: "2%", depth: 1 },
  { top: "80%", left: "77%", depth: 2 },
  { top: "73%", left: "15%", depth: 4 },
  { top: "80%", left: "50%", depth: 1 },
  { top: "30%", left: "25%", depth: 2 },
  { top: "55%", left: "88%", depth: 3 },
  { top: "60%", left: "35%", depth: 1 },
  { top: "30%", left: "65%", depth: 2 },
  { top: "85%", left: "85%", depth: 1 },
  { top: "25%", left: "75%", depth: 3 },
  { top: "65%", left: "10%", depth: 2 }
];

export function FloatingAwsIcons() {
  const [scope, animate] = React.useState();

  React.useEffect(() => {
    const animateIcons = async () => {
      const elements = document.querySelectorAll('.aws-icon');
      elements.forEach((el, i) => {
        const element = el as HTMLElement;
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.opacity = '1';
        }, i * 150);
      });
    };

    animateIcons();
  }, []);

  return (
    <div className="flex w-full h-full min-h-[600px] justify-center items-center overflow-hidden">
      <Floating sensitivity={-1} className="overflow-hidden">
        {awsIcons.map((icon, index) => (
          <FloatingElement
            key={icon.name}
            depth={iconPositions[index].depth}
            className={`aws-icon absolute transition-opacity duration-500`}
            style={{
              top: iconPositions[index].top,
              left: iconPositions[index].left
            }}
          >
            <motion.img
              src={icon.path}
              alt={icon.name}
              title={icon.name}
              className={`${
                icon.name === "AWS Cloud" 
                  ? "w-12 h-12 md:w-12 md:h-12" 
                  : "w-6 h-6 md:w-8 md:h-8"
              } object-contain hover:scale-100 duration-100 cursor-pointer transition-transform`}
              style={{
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
              }}
            />
          </FloatingElement>
        ))}
      </Floating>
    </div>
  );
} 