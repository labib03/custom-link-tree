import React, {useState} from 'react';
import {Button, Dropdown, Input, Modal, Text} from "@nextui-org/react";
import {Folder} from "../../../assets/icon/Folder";
import {File} from "../../../assets/icon/File";
import {Link} from "../../../assets/icon/Link";
import {sekretariat} from "../../../utils/subfolder";

const defaultFormValue = {
    fileName: '', fileLink: '', folderName: ''
}

const ModalCreate = (props) => {
    const {open, onClose, toast} = props
    const [selected, setSelected] = useState(new Set(["Kategori"]))
    const [form, setForm] = useState(defaultFormValue)

    const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);

    const onCloseHandler = () => {
        setSelected(new Set(["Kategori"]))
        setForm(defaultFormValue)
        onClose(false)
    }

    const handleFillForm = (key, value) => {
        setForm(val => ({...val, [key]: value}))
    }

    const selectHandler = (e) => {
        setSelected(e);
        setForm(defaultFormValue)
    }

    const submitHandler = () => {
        if (selectedValue.toLowerCase() === 'file') {
            const payload = {
                label: form?.fileName, link: form?.fileLink
            }
            sekretariat?.file.unshift(payload)
            toast({
                title: 'File berhasil ditambahkan',
                description: "Link file yang anda masukan sudah tersimpan",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }

        if (selectedValue.toLowerCase() === 'folder') {
            const toArray = form?.folderName?.split(' ')
            const slicedArr = toArray.slice(0, 2)
            const toString = slicedArr.join("-").toLowerCase()

            const payload = {
                label: form?.folderName, link: toString
            }

            sekretariat?.folder?.unshift(payload)
            toast({
                title: 'Folder berhasil dibuat.',
                description: "Folder yang anda masukan telah berhasil dibuat",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
        onCloseHandler()
    }

    console.info('isi form', form)
    return (<>
        <Modal
            // closeButton
            preventClose
            aria-labelledby="modal-title"
            open={open}
            onClose={() => onCloseHandler()}
            autoMargin={true}
            css={{
                paddingTop: '20px'
            }}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Tambah File / Folder Baru
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Dropdown>

                    <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
                    <Dropdown.Menu
                        aria-label='category options'
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={selectHandler}>
                        <Dropdown.Item key='File'>File</Dropdown.Item>
                        <Dropdown.Item key='Folder'>Folder</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {selectedValue?.toLowerCase() === 'folder' && (<Input
                    clearable
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Nama Folder"
                    contentLeft={<Folder fill="currentColor"/>}
                    onChange={(e) => handleFillForm('folderName', e?.target?.value)}
                />)}

                {selectedValue?.toLowerCase() === 'file' && (<>
                    <Input
                        clearable
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Nama File"
                        contentLeft={<File fill="currentColor"/>}
                        onChange={(e) => handleFillForm('fileName', e?.target?.value)}
                    />
                    <Input
                        clearable
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Link File"
                        contentLeft={<Link fill="currentColor"/>}
                        onChange={(e) => handleFillForm('fileLink', e?.target?.value)}
                    />
                </>)

                }
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={() => onCloseHandler()}>
                    Close
                </Button>
                <Button auto onPress={submitHandler}>
                    Tambahkan
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
};

export default ModalCreate;