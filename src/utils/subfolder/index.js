let fileIdx = 0;
let folderIdx = 0;

const Sub = [1, 2, 3, 4, 5, 6, 7].map((item) => ({
  label: `Sub folder ke-${item}`,
  value: `sub-${item}`,
}));


const sekretariat = {
  file: [
    {
      id: fileIdx++,
      label: `Dokumen ke ${fileIdx}`,
      link: "https://1drv.ms/x/s!Ak0DKSz2troAp05Sq6uvQqGWNjer?e=ZzbYT8",
    },
    {
      id: fileIdx++,
      label: `Dokumen ke ${fileIdx}`,
      link: "https://1drv.ms/x/s!Ak0DKSz2troAp05Sq6uvQqGWNjer?e=ZzbYT8",
    },
    {
      id: fileIdx++,
      label: `Dokumen ke ${fileIdx}`,
      link: "https://1drv.ms/x/s!Ak0DKSz2troAp05Sq6uvQqGWNjer?e=ZzbYT8",
    },
    {
      id: fileIdx++,
      label: `Dokumen ke ${fileIdx}`,
      link: "https://1drv.ms/x/s!Ak0DKSz2troAp05Sq6uvQqGWNjer?e=ZzbYT8",
    }
  ],
  folder: [
    {
      id: folderIdx++,
      label: `Folder ke ${folderIdx}`,
      link: `folder-${folderIdx}`
    },
    {
      id: folderIdx++,
      label: `Folder ke ${folderIdx}`,
      link: `folder-${folderIdx}`
    },
    {
      id: folderIdx++,
      label: `Folder ke ${folderIdx}`,
      link: `folder-${folderIdx}`
    },
    {
      id: folderIdx++,
      label: `Folder ke ${folderIdx}`,
      link: `folder-${folderIdx}`
    }
  ]
}

export {Sub, sekretariat}

