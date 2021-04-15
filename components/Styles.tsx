import styled from '@emotion/styled';


export const HeaderContainer = styled.header`
  display:flex;
  justify-content:space-between;
  background-color:#000;
  align-items:center;
  padding:0 40px;
  margin-bottom:10px;
  .flex{
      display:flex;
      align-items:center;
  }
  .header-logo{
      width:60px;
  }
  .header-title{
      color:#fff;
  }
  .header-nav{
      display:flex;
      align-items:center;
      .header-link{
          color:#fff;
          margin-right:10px;
          &:last-of-type{
            margin-right:none;
          }
      }
  }

`;

export const GeneralContainer = styled.div`
.flex{
      display:flex;
      align-items:center;
      justify-content:center;
  }
.btn{
    cursor: pointer;
    background-color:#000;
    color:#fff;
    border:none;
    padding:6px;
    margin-right:20px;
    width:120px;
    border-radius:4px;
    transition:.4s all;
    &:last-of-type{
        margin-right:none;
    }
    &:focus{
        outline:none;
    }
    &:active{
     transform:scale(.96);
    }
}
.mb-10{
    margin-bottom:10px;
}
`;


export const AddContainer: any = styled.div`
    position:absolute;
    right:${(props: any) => props.right ? props.right : 0};
    top:${(props: any) => props.top};
    width:400px;
    height:100%;
    background-color:#000;
    color:#fff;
    transition:.4s all;
    .close-button{
        display:inline-block;
        width:30px;
        height:30px;
        background-color:#c01515;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:20px;
        font-weight:bold;
        cursor: pointer;
    }
    .form-group{
        display:flex;
        flex-direction:column;
        width:90%;
        margin:0 auto 10px auto;
       
        input{
            padding:8px 10px;
            border:1px solid #9b9999;
            border-radius:4px;
            &:focus{
                outline:none;
            }
        }
      
    }
    .text-center{
       text-align:center;
    }
   
    .mb-5{
        margin-bottom:5px;
    }
    .mt-20{
        margin-top:20px;
    }
    .send-button{
        display:block;
        margin:auto;
        background-color:#fff;
        width:120px;
        padding:6px 10px;
        border:none;
        cursor: pointer;
        margin-top:20px;
        transition:.4s all;
        border-radius:4px;
        &:focus{
            outline:none;
        }
        &:active{
            transform:scale(.97);
        }

    }
`;